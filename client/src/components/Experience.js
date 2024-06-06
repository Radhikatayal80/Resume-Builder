
// src/components/Experience.js
import React, { useContext, useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    const { workExperience, setWorkExperience } = useContext(ResumeContext);
    const [newExperience, setNewExperience] = useState({
        position: '',
        employer: '',
        city: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        present: false,
        description: ''
    });
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewExperience({ ...newExperience, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        setNewExperience({ ...newExperience, present: e.target.checked });
    };

    const validateForm = () => {
        const { position, employer, city, startMonth, startYear, description } = newExperience;
        if (!position || !employer || !city || !startMonth || !startYear || !description) {
            setError('All fields are required');
            return false;
        }
        setError('');
        return true;
    };

    const handleAdd = () => {
        if (!validateForm()) {
            return;
        }
        setWorkExperience([...workExperience, newExperience]);
        setNewExperience({
            position: '',
            employer: '',
            city: '',
            startMonth: '',
            startYear: '',
            endMonth: '',
            endYear: '',
            present: false,
            description: ''
        });
        setIsFormVisible(false);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleDelete = (index) => {
        const updatedExperience = workExperience.filter((_, expIndex) => expIndex !== index);
        setWorkExperience(updatedExperience);
    };

    return (
        <div className="bg-white shadow-md rounded p-6 mx-auto mb-2">
            <h2 className="text-xl font-bold mb-4">Employment</h2>
            <button
                onClick={toggleFormVisibility}
                className="mb-4 bg-purple-600 text-white px-4 py-2 rounded"
            >
                {isFormVisible ? 'Hide Form' : 'Add Experience'}
            </button>
            {isFormVisible && (
                <>
                    <div className="mb-4">
                        <label for="position" class="block text-gray-700">Position</label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={newExperience.position}
                            onChange={handleChange}
                            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label for="employer" class="block text-gray-700">Employer</label>
                        <input
                            type="text"
                            id="employer"
                            name="employer"
                            value={newExperience.employer}
                            onChange={handleChange}
                            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label for="city" class="block text-gray-700">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={newExperience.city}
                            onChange={handleChange}
                            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label for="start-date" class="block text-gray-700">Start Date</label>
                            <div class="flex space-x-2">
                                <select
                                    id="start-month"
                                    name="startMonth"
                                    value={newExperience.startMonth}
                                    onChange={handleChange}
                                    class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                >
                                    <option value="">Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <select
                                    id="start-year"
                                    name="startYear"
                                    value={newExperience.startYear}
                                    onChange={handleChange}
                                    class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                >
                                    <option value="">Year</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                    <option>2015</option>
                                    <option>2014</option>
                                    <option>2013</option>
                                    <option>2012</option>
                                    <option>2011</option>
                                    <option>2010</option>
                                    <option>2009</option>
                                    <option>2008</option>
                                    <option>2007</option>
                                    <option>2006</option>
                                    <option>2005</option>
                                    <option>2004</option>
                                    <option>2003</option>
                                    <option>2002</option>
                                    <option>2001</option>
                                    <option>2000</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="end-date" class="block text-gray-700">End Date</label>
                            <div class="flex space-x-2">
                                <select
                                    id="end-month"
                                    name="endMonth"
                                    value={newExperience.endMonth}
                                    onChange={handleChange}
                                    class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                >
                                    <option value="">Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <select
                                    id="end-year"
                                    name="endYear"
                                    value={newExperience.endYear}
                                    onChange={handleChange}
                                    class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                >
                                    <option value="">Year</option>
                                    <option>2023</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                    <option>2015</option>
                                    <option>2014</option>
                                    <option>2013</option>
                                    <option>2012</option>
                                    <option>2011</option>
                                    <option>2010</option>
                                    <option>2009</option>
                                    <option>2008</option>
                                    <option>2007</option>
                                    <option>2006</option>
                                    <option>2005</option>
                                    <option>2004</option>
                                    <option>2003</option>
                                    <option>2002</option>
                                    <option>2001</option>
                                    <option>2000</option>
                                </select>
                            </div>
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        class="form-checkbox text-indigo-600"
                                        checked={newExperience.present}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span class="ml-2 text-gray-700">Present</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label for="description" class="block text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={newExperience.description}
                            onChange={handleChange}
                            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            rows="4"
                        />
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handleAdd}
                            class="bg-purple-600 text-white py-2 px-4 rounded-md"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="space-y-2">
                        {workExperience.map((exp, index) => (
                            <li key={index} className="bg-gray-100 p-4 rounded shadow flex justify-between items-center">
                                <div>
                                    <div className="font-bold">{exp.position}</div>
                                    <div>{exp.employer}, {exp.city}</div>
                                    <div className="text-sm text-gray-600">
                                        {exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {exp.description}
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

export default Experience;