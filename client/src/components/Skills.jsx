import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import Skill from './Skill';

const Skills = () => {
  const { skills, setSkills } = useContext(ResumeContext);

  const addSkill = () => {
    setSkills([...skills, { name: '', level: 1 }]);
  };

  const updateSkill = (index, updatedSkill) => {
    const newSkills = [...skills];
    newSkills[index] = updatedSkill;
    setSkills(newSkills);
  };

  const deleteSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  return (
    <div>
      <h3 className="text-base font-medium">Skills</h3>
      {skills.map((skill, index) => (
        <Skill
          key={index}
          skill={skill}
          index={index}
          updateSkill={updateSkill}
          deleteSkill={deleteSkill}
        />
      ))}
      <button onClick={addSkill} className="mt-4 p-2 border rounded-md bg-gray-100">Add skill</button>
    </div>
  );
};

export default Skills;
