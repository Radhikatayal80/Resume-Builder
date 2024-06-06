import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const Template1 = () => {
  const { personalDetails, education, workExperience, projects, skills } = useContext(ResumeContext);
  return (
    <div className="min-h-dvh min-w-[320px] bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="bg-gray-100 p-2 text-left md:col-span-4 lg:p-6 dark:bg-gray-900">
            <h1 className="leading-tighter mt-5 text-xl font-extrabold lg:text-3xl">
              {personalDetails.Gname}
              <p className=' text-base'>{personalDetails.Fname}</p>
            </h1>
            <h2 className="mt-3 text-sm text-purple-600 dark:text-purple-500">Web Developer</h2>
            <p className="mt-10 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{personalDetails.location}</p>
            <p className="mt-10 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{personalDetails.phone}</p>
            <p className="mt-10 text-sm  break-words text-wrap leading-relaxed text-gray-700 dark:text-gray-300 ">{personalDetails.email}</p>
          </div>
          <div className="mx-auto max-w-2xl space-y-16 p-5 md:col-span-8 md:p-10">
            <div>
              <h3 className=" text-base font-medium">Education</h3>
              <ul className="space-y-6">
                {education.map((edu, index) => (
                  <li key={index}>
                    <h4 className="text-xs font-semibold text-purple-600 dark:text-purple-500">{edu.startDate} - {edu.endDate}</h4>
                    <h5 className="mb-2 font-bold text-sm">{edu.degree}, {edu.school}</h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{edu.city}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium">Work Experience</h3>

              <ul className="space-y-2 mt-2">
                {workExperience.map((exp, index) => (
                  <li key={index} >
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

                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium">Projects</h3>
              <ul className="space-y-6">
                {projects.map((project, index) => (
                  <li key={index}>
                    <h4 className="text-xs font-semibold text-purple-600 dark:text-purple-500">{project.tech}</h4>
                    <h5 className="mb-2 font-bold text-sm">
                      {project.title} -
                      <a className="font-medium text-black underline hover:text-black/75 dark:text-white dark:hover:text-white/75" href={project.link}> {project.link}</a>
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Skills</h3>
              <ul className="space-y-1">
                {skills.map((skill, index) => (
                  <li key={index} className="text-sm">{skill.name}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
