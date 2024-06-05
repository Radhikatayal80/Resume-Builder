import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [personalDetails, setPersonalDetails] = useState({});
  const [education, setEducation] = useState([]);
  const [template, setTemplate] = useState('template1');

  return (
    <ResumeContext.Provider value={{ personalDetails, setPersonalDetails, education, setEducation, template, setTemplate }}>
      {children}
    </ResumeContext.Provider>
  );
};
