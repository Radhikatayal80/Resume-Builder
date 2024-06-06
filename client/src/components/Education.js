import React, { useContext, useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const { education, setEducation } = useContext(ResumeContext);
  const [newEducation, setNewEducation] = useState({
    degree: '',
    school: '',
    city: '',
    startDate: '',
    endDate: ''
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

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
    setIsFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleDelete = (index) => {
    const updatedEducation = education.filter((_, eduIndex) => eduIndex !== index);
    setEducation(updatedEducation);
  };

  return (
    <div className="bg-white shadow-md rounded p-6  mx-auto  mb-2">
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <button
        onClick={toggleFormVisibility}
        className="mb-4 bg-purple-600 text-white px-4 py-2 rounded"
      >
        {isFormVisible ? 'Hide Form' : 'Add Education'}
      </button>
      {isFormVisible && (
        <>
          <div className=" mb-4 grid grid-cols-2 gap-3">
            <input
              className="w-full px-4 py-2 border rounded"
              name="degree"
              placeholder="Degree"
              value={newEducation.degree}
              onChange={handleChange}
            />
            <input
              className="w-full px-4 py-2 border rounded"
              name="school"
              placeholder="School"
              value={newEducation.school}
              onChange={handleChange}
            />
            <input
              className="w-full px-4 py-2 border rounded"
              name="city"
              placeholder="City"
              value={newEducation.city}
              onChange={handleChange}
            />
            <input
              className="w-full px-4 py-2 border rounded"
              name="startDate"
              placeholder="Start Date"
              value={newEducation.startDate}
              onChange={handleChange}
            />
            <input
              className="w-full px-4 py-2 border rounded"
              name="endDate"
              placeholder="End Date"
              value={newEducation.endDate}
              onChange={handleChange}
            />
            <button
              onClick={handleAdd}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Add
            </button>


          </div>
          <ul className="space-y-2">
            {education.map((edu, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded shadow flex justify-between items-center">
                <div>
                  <div className="font-bold">{edu.degree}</div>
                  <div>{edu.school}, {edu.city}</div>
                  <div className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                <button onClick={() => handleDelete(index)} className="text-red-500">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
        </>

      )}

    </div>
  );
};

export default Education;
