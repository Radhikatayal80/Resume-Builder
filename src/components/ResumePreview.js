import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';

const ResumePreview = () => {
  const { template } = useContext(ResumeContext);

  const renderTemplate = () => {
    switch (template) {
      case 'template1':
        return <Template1 />;
      case 'template2':
        return <Template2 />;
      case 'template3':
        return <Template3 />;
      default:
        return <Template1 />;
    }
  };

  return (
    <div className="resume-preview">
      {renderTemplate()}
    </div>
  );
};

export default ResumePreview;
