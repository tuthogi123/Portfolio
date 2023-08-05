
import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import About from './Components/About';

import ContactForm from './Components/Contact';

import Home from './Components/Home';
import Projects from './Components/Projects';
import Skill from './Components/Skills';
import SocialMedia from './Components/SocialMedia';




import './App.css';
const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color:;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

const ComponentContainer = styled.div`
  opacity: ${props => props.isVisible ? '1' : '0'};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: opacity 0.5s ease, transform 0.5s ease;
`;




const App = () => {
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <Router>
      <div>
        <Header />
        <Button onClick={toggleComponent}>
        {showComponent ? 'Hide Component' : 'Show Component'}
      </Button>
      <ComponentContainer isVisible={showComponent}>
        {/* Your component content goes here */}
      </ComponentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/" exact component={Home} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Skills" element={<Skill />} />
          <Route path="/socialmedia" element={<SocialMedia/>} />

         
        </Routes>
        
      </div>
    </Router>
  );
};



export default App;
