from flask import Flask, request, jsonify
from flask_cors import CORS
from basicEval import *
app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit():
    # Sample dataset: sst2
    # Sample model: google/flan-t5-large
    # Sample prompt: As a sentiment classifier, determine whether the following text is '0' or '1'. Please classify: \nQuestion: {content}\nAnswer:
    data = request.json
    print(data)
    dataset_name = data['datasetName']
    model_name = data['llmName']
    prompt = data['prompt']
    dataset = dataLoader(dataset_name)
    model = modelLoader(model_name)
    score = evalFunc(model, dataset, prompt)
    return jsonify({"message": "Data received successfully", "score": score})

if __name__ == '__main__':
    app.run(host='localhost', port=4000, debug=True)
