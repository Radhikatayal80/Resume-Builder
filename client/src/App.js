// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';
import LandingPage from './components/LandingPage';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <ResumeProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </ResumeProvider>
    </Router>
  );
}

export default App;
