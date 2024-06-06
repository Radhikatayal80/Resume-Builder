import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const ResumeForm = () => {
  const { setPersonalDetails, setEducation, setWorkExperience, setProjects, setAchievements, setSkills } = useContext(ResumeContext);

  // Handlers for form inputs go here
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Personal Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="name">Name</label>
        <input
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
          id="name"
          name="name"
          type="text"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="email">Email</label>
        <input
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
          id="email"
          name="email"
          type="email"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="phone">Phone</label>
        <input
          className="mt-1 w-full rounded border border-gray-300 px-3 py-2"
          id="phone"
          name="phone"
          type="text"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default ResumeForm;
