import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Footer = () => {
  const [alertText, setAlertText] = useState('');

  const showAlert = (text) => {
    setAlertText(text);
  };

  const hideAlert = () => {
    setAlertText('');
  };

  // Use import.meta.env to access environment variables in Vite
  const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL || '';
  const githubUrl = import.meta.env.VITE_GITHUB_URL || '';
  const resumeUrl = import.meta.env.VITE_RESUME_URL || '#';

  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Shaik Apsarunnisa.</p>
      <div className="icons">
        <div 
          className="icon-container" 
          onMouseEnter={() => showAlert('Download my resume')}
          onMouseLeave={hideAlert}
        >
          <a 
            className="footer-icon-text" 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FileDownloadIcon className='footer-icon' />
            Resume
          </a>
        </div>
        <div 
          className="icon-container" 
          onMouseEnter={() => showAlert('Visit my LinkedIn profile')}
          onMouseLeave={hideAlert}
        >
          <a 
            className="footer-icon-text" 
            href={linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <LinkedInIcon className='footer-icon' />
            LinkedIn
          </a>
        </div>
        <div 
          className="icon-container" 
          onMouseEnter={() => showAlert('Check out my GitHub')}
          onMouseLeave={hideAlert}
        >
          <a 
            className="footer-icon-text" 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GitHubIcon className='footer-icon' />
            GitHub
          </a>
        </div>
      </div>
      {alertText && (
        <div className="alert">{alertText}</div>
      )}
    </footer>
  );
};

export default Footer;
