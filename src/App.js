import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';
import Form from './pages/form/Form';
import './App.css';
import Info from './pages/info/Info';
import Prueba from './pages/Prueba/Prueba';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/form" element={<Form />}/>
      <Route path="/info" element={<Info />}/>
      <Route path="/prueba" element={<Prueba />}/>


    </Routes>
  );
}

export default App;


