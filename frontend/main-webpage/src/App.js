import React from 'react';
import './App.css';
import DatasetForm from './components/DatasetForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dataset and LLM Form</h1>
        <DatasetForm />
      </header>
    </div>
  );
}

export default App;
