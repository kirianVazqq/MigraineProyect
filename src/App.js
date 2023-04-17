import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Form from './pages/Form';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/form" element={<Form />}/>
    </Routes>
  );
}

export default App;


