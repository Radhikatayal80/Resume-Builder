// src/components/Resume.jsx
import React from 'react';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import ResumePreview from './ResumePreview';
import TemplateSelector from './TemplateSelector';
import Experience from './Experience';
import Project from './Project';
import Skills from './Skills';
export default function Resume() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="w-1/2 p-4 bg-gray-100 h-[35rem] gap-2  overflow-y-scroll">
        <PersonalDetails />
        <Education />
      
        <Experience/>
        <Project/>
        <Skills/>
      </div>
      <div className="w-1/2 p-4 h-[35rem] overflow-y-scroll">
        <ResumePreview />
        <TemplateSelector />
      </div>
    </div>
  );
}
