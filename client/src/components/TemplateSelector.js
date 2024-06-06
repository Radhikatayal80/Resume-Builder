import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const TemplateSelector = () => {
  const { template, setTemplate } = useContext(ResumeContext);

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  return (
    <div>
      <h2>Select Template</h2>
      <select value={template} onChange={handleTemplateChange}>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
        <option value="template3">Template 3</option>
        <option value="template4">Template 4</option>
      </select>
    </div>
  );
};

export default TemplateSelector;
