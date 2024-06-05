import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const Template3 = () => {
  const { personalDetails, education } = useContext(ResumeContext);

  return (
    <div className="template3">
      <h1>{personalDetails.name}</h1>
      <p>{personalDetails.email}</p>
      <p>{personalDetails.phone}</p>
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>{edu.degree} at {edu.school}, {edu.city} ({edu.startDate} - {edu.endDate})</li>
        ))}
      </ul>
    </div>
  );
};

export default Template3;
