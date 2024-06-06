import React from 'react';

const Skill = ({ skill, index, updateSkill, deleteSkill }) => {
    const handleSkillChange = (e) => {
        updateSkill(index, { ...skill, name: e.target.value });
    };

    const handleLevelChange = (e) => {
        updateSkill(index, { ...skill, level: parseInt(e.target.value) });
    };

    return (
        <div className="skill-item p-4 border rounded-md mb-4">
            <input
                type="text"
                value={skill.name}
                onChange={handleSkillChange}
                placeholder="Skill"
                className="block w-full p-2 mb-2 border rounded-md"
            />
            <div className="flex items-center">
                <input
                    type="range"
                    min="1"
                    max="5"
                    value={skill.level}
                    onChange={handleLevelChange}
                    className="flex-1"
                />
                <span className="ml-2">{skill.level}</span>
            </div>
            <div className="flex justify-between mt-2">
                <button onClick={() => deleteSkill(index)} className="text-red-500">Delete</button>
                <button className="text-green-500">Done</button>
            </div>
        </div>
    );
};

export default Skill;
