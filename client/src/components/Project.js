// src/components/Project.js
import React, { useContext, useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
    const { projects, setProjects } = useContext(ResumeContext);
    const [newProject, setNewProject] = useState({
        title: '',
        tech: '',
        link: '',
        description: ''
    });
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const validateForm = () => {
        const { title, tech, link, description } = newProject;
        if (!title || !tech || !link || !description) {
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
        setProjects([...projects, newProject]);
        setNewProject({
            title: '',
            tech: '',
            link: '',
            description: ''
        });
        setIsFormVisible(false);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleDelete = (index) => {
        const updatedProjects = projects.filter((_, projIndex) => projIndex !== index);
        setProjects(updatedProjects);
    };

    return (
        <div className="bg-white shadow-md rounded p-6 mx-auto">
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <button
                onClick={toggleFormVisibility}
                className="mb-4 bg-purple-600 text-white px-4 py-2 rounded"
            >
                {isFormVisible ? 'Hide Form' : 'Add Project'}
            </button>
            {isFormVisible && (
                <>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newProject.title}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tech" className="block text-gray-700">Tech</label>
                        <input
                            type="text"
                            id="tech"
                            name="tech"
                            value={newProject.tech}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="link" className="block text-gray-700">Link</label>
                        <input
                            type="text"
                            id="link"
                            name="link"
                            value={newProject.link}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={newProject.description}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            rows="4"
                        />
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handleAdd}
                            className="bg-purple-600 text-white py-2 px-4 rounded-md"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="space-y-2">
                        {projects.map((project, index) => (
                            <li key={index} className="bg-gray-100 p-4 rounded shadow flex justify-between items-center">
                                <div>
                                    <div className="font-bold">{project.title}</div>
                                    <div>{project.tech}</div>
                                    <div className="text-sm text-gray-600">
                                        <a className="font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75" href={project.link}> {project.link}</a>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {project.description}
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

export default Project;
