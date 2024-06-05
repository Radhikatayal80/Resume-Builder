import React, { useContext, useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const Education = () => {
  const { education, setEducation } = useContext(ResumeContext);
  const [newEducation, setNewEducation] = useState({
    degree: '',
    school: '',
    city: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({ ...newEducation, [name]: value });
  };

  const handleAdd = () => {
    setEducation([...education, newEducation]);
    setNewEducation({
      degree: '',
      school: '',
      city: '',
      startDate: '',
      endDate: ''
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="space-y-4">
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          name="degree"
          placeholder="Degree"
          value={newEducation.degree}
          onChange={handleChange}
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          name="school"
          placeholder="School"
          value={newEducation.school}
          onChange={handleChange}
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          name="city"
          placeholder="City"
          value={newEducation.city}
          onChange={handleChange}
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          name="startDate"
          placeholder="Start Date"
          value={newEducation.startDate}
          onChange={handleChange}
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          name="endDate"
          placeholder="End Date"
          value={newEducation.endDate}
          onChange={handleChange}
        />
      </div>
      <button
        className="mt-4 w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={handleAdd}
      >
        Add Education
      </button>
      <ul className="mt-6 space-y-2">
        {education.map((edu, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="font-semibold">{edu.degree} at {edu.school}</p>
            <p className="text-gray-600">{edu.city}</p>
            <p className="text-gray-600">({edu.startDate} - {edu.endDate})</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
