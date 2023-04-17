import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Router path="/" element={<Home />}/>
    </Router>
  );
}

export default App;


