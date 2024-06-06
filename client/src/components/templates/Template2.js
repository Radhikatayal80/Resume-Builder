import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const Template2 = () => {
  const { personalDetails, education, workExperience, projects, skills } = useContext(ResumeContext);

  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100">
      <div className="container mx-auto max-w-5xl py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg">
            <h1 className="text-3xl font-extrabold mb-2">
              {personalDetails.Gname} <span className='block text-base font-normal'>{personalDetails.Fname}</span>
            </h1>
            <h2 className="text-lg font-semibold text-purple-500">Web Developer</h2>
            <div className="mt-4 text-sm">
              <p>{personalDetails.location}</p>
              <p>{personalDetails.phone}</p>
              <p>{personalDetails.email}</p>
            </div>
          </div>
          <div className="md:col-span-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-4">
                {education.map((edu, index) => (
                  <li key={index} className="p-4 rounded-md border border-gray-300 dark:border-gray-700">
                    <h4 className="text-purple-500 font-semibold">{edu.startDate} - {edu.endDate}</h4>
                    <h5 className="text-lg font-bold">{edu.degree}, {edu.school}</h5>
                    <p className="text-sm">{edu.city}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
              <ul className="space-y-4">
                {workExperience.map((exp, index) => (
                  <li key={index} className="p-4 rounded-md border border-gray-300 dark:border-gray-700">
                    <div className="font-bold">{exp.position}</div>
                    <div>{exp.employer}, {exp.city}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}
                    </div>
                    <div className="text-sm">{exp.description}</div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <ul className="space-y-4">
                {projects.map((project, index) => (
                  <li key={index} className="p-4 rounded-md border border-gray-300 dark:border-gray-700">
                    <h4 className="text-purple-500 font-semibold">{project.tech}</h4>
                    <h5 className="text-lg font-bold">
                      {project.title} - 
                      <a href={project.link} className="text-blue-500 underline ml-1">{project.link}</a>
                    </h5>
                    <p className="text-sm">{project.description}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <ul className="space-y-1">
                {skills.map((skill, index) => (
                  <li key={index} className="text-sm">{skill.name}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
