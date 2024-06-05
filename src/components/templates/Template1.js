import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const Template1 = () => {
  const { personalDetails, education } = useContext(ResumeContext);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-6">
        <img
          src={personalDetails.image}
          alt="Profile"
          className="w-24 h-24 rounded-full mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold">{personalDetails.name}</h1>
          <p className="text-gray-600">{personalDetails.email}</p>
          <p className="text-gray-600">{personalDetails.phone}</p>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Summary</h2>
      <p className="mb-6">{personalDetails.summary}</p>
      
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <ul className="mb-6">
        {personalDetails.experience && personalDetails.experience.length > 0 ? (
          personalDetails.experience.map((exp, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-gray-600">{exp.company} - {exp.location}</p>
              <p className="text-gray-600">{exp.startDate} - {exp.endDate}</p>
              <ul className="list-disc ml-5">
                {exp.responsibilities.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p>No experience available</p>
        )}
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="mb-6 flex flex-wrap">
        {/* {personalDetails.skills.map((skill, index) => (
          <li key={index} className="bg-gray-200 rounded-full px-4 py-1 mr-2 mb-2">
            {skill}
          </li>
        ))} */}
      </ul>
      
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <ul>
        {education && education.length > 0 ? (
          education.map((edu, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}, {edu.city}</p>
              <p className="text-gray-600">{edu.startDate} - {edu.endDate}</p>
            </li>
          ))
        ) : (
          <p>No education details available</p>
        )}
      </ul>
    </div>
  );
};

export default Template1;
