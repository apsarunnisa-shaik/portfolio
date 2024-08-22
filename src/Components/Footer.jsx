import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Footer = () => {
  const [alertText, setAlertText] = useState('');

  const showAlert = (text) => {
    setAlertText(text);
    setTimeout(() => {
      setAlertText('');
    }, 3000);
  };

  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Shaik Apsarunnisa.</p>
      <div className="icons">
        <div 
          className="icon-container" 
          onMouseEnter={() => showAlert('Download my resume')}
        >
          <a className="footer-icon-text" href="https://drive.google.com/file/d/1raZYOSME-kOuq6mLgik34Pr-MBR9njih/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <FileDownloadIcon className='footer-icon' />
            Resume
          </a>
        </div>
        <div 
          className="icon-container" 
          onMouseEnter={() => showAlert('Visit my LinkedIn profile')}
        >
          <a className="footer-icon-text" href="https://www.linkedin.com/in/apsarunnisa" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className='footer-icon' />
            LinkedIn
          </a>
        </div>
        <div 
          className="icon-container" 
          onMouseEnter={() => showAlert('Check out my GitHub')}
        >
          <a className="footer-icon-text" href="https://github.com/apsarunnisa-shaik" target="_blank" rel="noopener noreferrer">
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
