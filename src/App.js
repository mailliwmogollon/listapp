import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouting } from './components/AppRouting';
import AddItem from './components/AddItem/AddItem';

function App() {
  return (
    <Router>
      <AddItem/>
      <AppRouting/>
    </Router>
  );
}

export default App;