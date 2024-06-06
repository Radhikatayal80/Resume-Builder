import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const Template3 = () => {
  const { personalDetails, education, workExperience, projects, skills } = useContext(ResumeContext);
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100 p-5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold">
            {personalDetails.Gname} {personalDetails.Fname}
          </h1>
          <h2 className="text-lg font-medium text-purple-600 dark:text-purple-500">Web Developer</h2>
          <div className="mt-4 text-sm">
            <p>{personalDetails.location}</p>
            <p>{personalDetails.phone}</p>
            <p>{personalDetails.email}</p>
          </div>
        </div>
        <hr className="mb-6" />
        <section className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Education</h3>
          <ul className="space-y-4">
            {education.map((edu, index) => (
              <li key={index}>
                <h4 className="text-purple-600 dark:text-purple-500 font-semibold">{edu.startDate} - {edu.endDate}</h4>
                <h5 className="text-lg font-bold">{edu.degree}, {edu.school}</h5>
                <p className="text-sm">{edu.city}</p>
              </li>
            ))}
          </ul>
        </section>
        <hr className="mb-6" />
        <section className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Work Experience</h3>
          <ul className="space-y-4">
            {workExperience.map((exp, index) => (
              <li key={index}>
                <div className="font-bold">{exp.position}</div>
                <div>{exp.employer}, {exp.city}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} {exp.endYear}`}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.description}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <hr className="mb-6" />
        <section className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Projects</h3>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index}>
                <h4 className="text-purple-600 dark:text-purple-500 font-semibold">{project.tech}</h4>
                <h5 className="text-lg font-bold">
                  {project.title} -
                  <a href={project.link} className="text-blue-500 underline ml-1">{project.link}</a>
                </h5>
                <p className="text-sm">{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <hr className="mb-6" />
        <section>
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Skills</h3>
          <ul className="space-y-1">
            {skills.map((skill, index) => (
              <li key={index} className="text-sm">{skill.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Template3;
