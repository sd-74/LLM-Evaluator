import React, { useState } from 'react';

function DatasetForm() {
  const [datasetName, setDatasetName] = useState('');
  const [llmName, setLlmName] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e) => {
    console.log("submit")
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ datasetName, llmName, prompt }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="datasetName">Dataset Name:</label>
        <input
          type="text"
          id="datasetName"
          value={datasetName}
          onChange={(e) => setDatasetName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="llmName">LLM Name:</label>
        <input
          type="text"
          id="llmName"
          value={llmName}
          onChange={(e) => setLlmName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="prompt">Prompt:</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DatasetForm;
