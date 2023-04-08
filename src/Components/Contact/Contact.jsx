import React from 'react';
import './Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='wrapper'>
        <span>BE IN TOUCH WITH US:</span>
        <div className='icons'>
          <a
            href='https://github.com/julienguyon12'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/julien-guyon-9079a0189'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
