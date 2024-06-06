import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const Template4 = () => {
  const { personalDetails, education, workExperience, projects, skills } = useContext(ResumeContext);

  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100 p-10">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold mb-2">
            {personalDetails.Gname} {personalDetails.Fname}
          </h1>
          <h2 className="text-lg font-medium text-purple-600 dark:text-purple-500">Web Developer</h2>
          <div className="mt-4 text-sm">
            <p>{personalDetails.location}</p>
            <p>{personalDetails.phone}</p>
            <p>{personalDetails.email}</p>
          </div>
        </div>
        <table className="w-full mb-6 border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Education</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{edu.startDate} - {edu.endDate}</td>
                <td className="p-2">{edu.degree}, {edu.school}</td>
                <td className="p-2">{edu.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-full mb-6 border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Work Experience</th>
            </tr>
          </thead>
          <tbody>
            {workExperience.map((exp, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{exp.position}</td>
                <td className="p-2">{exp.employer}, {exp.city}</td>
                <td className="p-2">{exp.startMonth} {exp.startYear} - {exp.present ? 'Present' : `${exp.endMonth} ${exp.endYear}`}</td>
                <td className="p-2">{exp.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-full mb-6 border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Projects</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{project.tech}</td>
                <td className="p-2">{project.title} - <a href={project.link} className="text-blue-500 underline">{project.link}</a></td>
                <td className="p-2">{project.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="w-full mb-6 border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Skills</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{skill.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Declaration</h3>
          <p className="text-sm mb-4">I hereby declare that the information provided is true and correct to the best of my knowledge and belief.</p>
          <p className="text-sm">Signature: ______________________</p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
