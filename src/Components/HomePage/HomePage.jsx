import React from 'react';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className='Home'>
      <main>
        <div className='heading'>
          <h1>Hello,</h1>
          <p>
            I am an aspiring Frontend Developer.
          </p>
        </div>
      </main>
      <footer>
        <a
          href='https://twitter.com/SangeetaGogoi_'
          target='_blank'
          rel='noreferrer'
          className='twitter'
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href='https://www.linkedin.com/in/sangeeta-gogoi/'
          target='_blank'
          rel='noreferrer'
          className='linkedin'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href='https://github.com/SangeetaGogoi'
          target='_blank'
          rel='noreferrer'
          className='github'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </footer>
    </div>
  );
}
