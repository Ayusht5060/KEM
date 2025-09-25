from flask import Flask, request, jsonify, send_file
import pandas as pd
import joblib
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS
from gtts import gTTS
import os
import uuid
import speech_recognition as sr

app = Flask(__name__)
CORS(app)

# Load vectorizer and Q&A dataset
vectorizer = joblib.load("tfidf_vectorizer.pkl")
qna_df = pd.read_csv("qna_data.csv")
question_vectors = vectorizer.transform(qna_df['question'])

# Chatbot answer generator
def get_answer(user_question):
    user_vec = vectorizer.transform([user_question])
    similarity_scores = cosine_similarity(user_vec, question_vectors)
    best_index = similarity_scores.argmax()
    return qna_df.iloc[best_index]['answer']

@app.route('/')
def index():
    return jsonify({"message": "API is working!"})

# ✅ Web-based chatbot interaction
@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    user_question = data.get("question", "")
    if not user_question:
        return jsonify({"error": "No question provided"}), 400

    answer = get_answer(user_question)
    return jsonify({"answer": answer})

# ✅ Text-to-speech for robots from given text
@app.route('/robot_speak', methods=['POST'])
def robot_speak():
    data = request.get_json()
    user_question = data.get("question", "")
    if not user_question:
        return jsonify({"error": "No question provided"}), 400

    answer = get_answer(user_question)
    tts = gTTS(text=answer, lang='en')
    filename = f"robot_{uuid.uuid4().hex}.mp3"
    tts.save(filename)

    return send_file(filename, mimetype='audio/mpeg', as_attachment=False)

# ✅ ESP32 sends audio, Flask returns answer in MP3
@app.route('/robot_ask', methods=['POST'])
def robot_ask():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file uploaded"}), 400

    audio_file = request.files['audio']
    recognizer = sr.Recognizer()

    with sr.AudioFile(audio_file) as source:
        audio_data = recognizer.record(source)

    try:
        user_question = recognizer.recognize_google(audio_data)
        print(f"User asked: {user_question}")

        answer = get_answer(user_question)
        print(f"Answer: {answer}")

        tts = gTTS(text=answer, lang='en')
        filename = f"robot_answer_{uuid.uuid4().hex}.mp3"
        tts.save(filename)

        return send_file(filename, mimetype='audio/mpeg', as_attachment=False)

    except sr.UnknownValueError:
        return jsonify({"error": "Could not understand audio"}), 400

# ✅ Speech-to-text only (manual audio upload)
@app.route('/speech_to_text', methods=['POST'])
def speech_to_text():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file uploaded"}), 400

    audio_file = request.files['audio']
    recognizer = sr.Recognizer()

    with sr.AudioFile(audio_file) as source:
        audio_data = recognizer.record(source)

    try:
        text = recognizer.recognize_google(audio_data)
        return jsonify({"text": text})
    except sr.UnknownValueError:
        return jsonify({"error": "Could not understand audio"}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')