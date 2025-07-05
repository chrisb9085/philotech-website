from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Flask backend!"})

# Example API route
@app.route('/api/hello')
def hello_api():
    return jsonify({"greeting": "Hello from the API!"})

if __name__ == '__main__':
    app.run(debug=True) 