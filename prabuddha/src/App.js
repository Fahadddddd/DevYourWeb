import React from 'react';
import { BrowserRouter as Router, Routes,Route,Link, BrowserRouter } from 'react-router-dom';

import './App.css';
import Explore from './Explore';
import About from './About/About';
import Event from './Event/Event'
import Register from './Registration/Register';
import Contact from './Contact/Contact';
function App() {
  return (
    <BrowserRouter>
    
    
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
