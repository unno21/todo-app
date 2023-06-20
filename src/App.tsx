import React from 'react';
import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">
      <Button
        size="large"
        variant="secondary"
      >
        <h1>Test</h1>
      </Button>
    </div>
  );
}

export default App;
