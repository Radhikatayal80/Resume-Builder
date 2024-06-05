import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const PersonalDetails = () => {
  const { personalDetails, setPersonalDetails } = useContext(ResumeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          id="name"
          name="name"
          placeholder="Name"
          value={personalDetails.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          id="email"
          name="email"
          placeholder="Email"
          value={personalDetails.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">Phone</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={personalDetails.phone}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
