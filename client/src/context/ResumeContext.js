import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [personalDetails, setPersonalDetails] = useState({

    Gname: 'Shaun Castillo',
    Fname:"John",
    email: 'shaun.castillo@example.com',
    phone: '+10 123 456 789',
    location: 'New York, USA',
  });
  
  const [education, setEducation] = useState([
   { degree: 'Professional Studies in Web Development', school: 'NY, USA', city: 'New York', startDate: '2007', endDate: '2009' },
  ]);

  const [workExperience, setWorkExperience] = useState([
    { position: 'Web Designer',city:"daman", employer: 'Web Inspired LLC',location:"sdf",endMonth:'2003-3304', startMonth: '2003-2008', description: 'As a Web Designer at Web Inspired LLC, I translated my passion for aesthetics and functionality into captivating online experiences.' },
 ]);

  const [projects, setProjects] = useState([
    { title: 'Project Management SaaS', tech: 'Laravel - Vue.js', link: 'https://example.com', description: 'Specializing in Laravel and Vue.js to create robust solutions for project management.' },
 ]);

  const [achievements, setAchievements] = useState([]);
  const [skills, setSkills] = useState([
    { name: 'React', level: 3 },
    { name: 'Vue.js', level: 4 },
    { name: 'Laravel', level: 5 },
    { name: 'Python', level: 4 },
    { name: 'JavaScript', level: 5 },
  ]);
  const [template, setTemplate] = useState('template1');

  return (
    <ResumeContext.Provider value={{ personalDetails,template,education, workExperience, projects, achievements, skills,setSkills,setTemplate, setPersonalDetails, setEducation, setWorkExperience, setProjects, setAchievements, setSkills }}>
      {children}
    </ResumeContext.Provider>
  );
};
