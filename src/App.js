import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';
import Form from './pages/form/Form';
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


