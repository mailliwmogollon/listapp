import React from 'react';
import Viws from './components/Viws';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>

     <div className="App">
        <Viws />
     </div>

    </Router>
  );
}

export default App;
