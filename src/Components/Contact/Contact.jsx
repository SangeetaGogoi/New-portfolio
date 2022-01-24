import React from 'react';
import './contact.css';
import TYPEFORMPNG from '../image/typeform.png';

export default function Contact() {
  return (
    <main className='contact-page'>
      <h3>Contact</h3>
      <div className='contactImg'>
        <p>
          My preferred way of contact is via
          Typeform
        </p>
        <img
          src={TYPEFORMPNG}
          alt='typeFormLogo'
          className='typeFormLogo'
        />
      </div>
      <a
        href='https://yjw0ool5ui0.typeform.com/to/fzaBb0XQ'
        target='_blank'
        rel='noreferrer'
        className='clickButton'
      >
        Click here
      </a>
    </main>
  );
}
