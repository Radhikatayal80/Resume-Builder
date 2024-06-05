import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import ResumePreview from './components/ResumePreview';
import TemplateSelector from './components/TemplateSelector';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    // <ResumeProvider>
    //   <div className="app">
    //     <div className="form-section">
    //       <PersonalDetails />
    //       <Education />
    //       <TemplateSelector />
    //     </div>
    //     <ResumePreview />
    //   </div>
    // </ResumeProvider>
    <div>
      <Navbar/>
    </div>
  );
}

export default App;
