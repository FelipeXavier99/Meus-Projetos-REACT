//import React from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contatos from './pages/Contatos';
import Projects from './pages/Projects';
import { Route } from 'react-router-dom';
import './App.css';

import Container from './layout/Container';
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

function App() {
  return (
 

  <Router>
<Navbar />

      <Container customClass="min-height">
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/projects" element={<Projects />} />
    <Route exact path="/contatos" element={<Contatos />} />
  </Routes>
</Container>

<Footer/>
    </Router>
    
  );
}

export default App;
