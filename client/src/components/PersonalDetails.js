// src/components/PersonalDetails.jsx
import React, { useContext,useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const PersonalDetails = () => {
  const { personalDetails, setPersonalDetails } = useContext(ResumeContext);

  const [minimized, setMinimized] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };
  const handleButtonClick = (field) => {
    setActiveField(activeField === field ? null : field);
  };
  return (
    <div className={`container mx-auto p-6 bg-white mb-2 shadow-md rounded-lg ${minimized ? ' h-[4rem] overflow-hidden' : 'h-auto'}`}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-bold ">Personal details</h2>
        <button className="text-gray-500" onClick={toggleMinimize}>
          {minimized ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg> : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>}
        </button>
      </div>
      {!minimized && (
        <form>
          {/* Photo and Name Section */}
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden mr-4">
              {/* Placeholder for photo upload */}
              <img src="path/to/photo.png" alt="Photo" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex">
                <div className="w-1/2 mr-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="given-name">Given name</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="given-name"
                    name="Gname"
                    type="text"
                    placeholder="Given name"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="family-name">Family name</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="family-name"
                    name="Fname"
                    type="text"
                    placeholder="Family name"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=' grid grid-cols-2 gap-2'>
         
          {/* Email Address */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email address</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              onChange={handleChange}
            />
          </div>

          {/* Headline */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="headline">Headline</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="headline"
              name="headline"
              type="text"
              placeholder="Headline"
              onChange={handleChange}
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone-number">Phone number</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone-number"
              name="phone"
              type="text"
              placeholder="Phone number"
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              name="location"
              type="text"
              placeholder="location"
              onChange={handleChange}
            />
          </div>
   
          </div>
          {/* Post Code and City */}
          <div className="flex mb-6">
            <div className="w-1/2 mr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="post-code">Post code</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="post-code"
                name="postCode"
                type="text"
                placeholder="Post code"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                name="city"
                type="text"
                placeholder="City"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">Date of birth</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              name="dob"
              type="date"
              onChange={handleChange}
            />
          </div>

     

          {/* Additional Fields */}
          <div className="flex flex-wrap gap-2">
            <button type="button" className="bg-gray-200 text-gray-700 py-2 px-4 rounded" onClick={() => handleButtonClick('placeOfBirth')}>+ Place of birth</button>
            <button type="button" className="bg-gray-200 text-gray-700 py-2 px-4 rounded" onClick={() => handleButtonClick('gender')}>+ Gender</button>
            <button type="button" className="bg-gray-200 text-gray-700 py-2 px-4 rounded" onClick={() => handleButtonClick('nationality')}>+ Nationality</button>
            <button type="button" className="bg-gray-200 text-gray-700 py-2 px-4 rounded" onClick={() => handleButtonClick('civilStatus')}>+ Civil status</button>
            <button type="button" className="bg-gray-200 text-gray-700 py-2 px-4 rounded" onClick={() => handleButtonClick('website')}>+ Website</button>
            <button type="button" className="bg-gray-200 text-gray-700 py-2 px-4 rounded" onClick={() => handleButtonClick('linkedIn')}>+ LinkedIn</button>
            <button type="button" className="bg-gray-200 text-gray-700 py-2 px-4 rounded" onClick={() => handleButtonClick('customField')}>+ Custom field</button>
          </div>
          {/* Render input field based on active field */}
          {activeField && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={activeField}>{activeField}</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={activeField}
                name={activeField}
                type="text"
                placeholder={activeField}
                onChange={handleChange}
              />
            </div>
          )}

        </form>

    
      )}
  
    </div>
  );
};

export default PersonalDetails;
