from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    print(data)
    return jsonify({"message": "Data received successfully"})

if __name__ == '__main__':
    app.run(host='localhost', port=4000, debug=True)
