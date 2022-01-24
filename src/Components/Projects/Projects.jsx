import React from 'react';
import './projects.css';
import MOVIEPNG from '../image/movieimg.png';
import CHATPNG from '../image/chatimg.png';
import TRAVELPNG from '../image/travelmapimg.png';
import BLOGPNG from '../image/blogimg.png';

export default function Projects() {
  return (
    <main className='projects-page'>
      <div className='imageLink'>
        <div className='upperContainer'>
          <div className='movieContainer'>
            <h4 className='headingg'>
              Movie-Watchlist Application
            </h4>
            <img
              src={MOVIEPNG}
              alt='movieAppImg'
              className='movieAppImg'
            />
            <a
              href='https://movie-watchlist-tmdb.netlify.app/'
              target='_blank'
              rel='noreferrer'
              className='movieApplink'
            >
              Demo
            </a>
          </div>
          <div className='chatContainer'>
            <h4 className='headingg'>
              Chat Application
            </h4>
            <img
              src={CHATPNG}
              alt='chatAppImg'
              className='chatAppImg'
            />
            <a
              href='https://custom-chat-app.netlify.app/'
              target='_blank'
              rel='noreferrer'
              className='chatAppLink'
            >
              Demo
            </a>
          </div>
        </div>
        <div className='lowerContainer'>
          <div className='travelContainer'>
            <h4 className='headingg'>
              Travel-Pin-Map Application
            </h4>
            <img
              src={TRAVELPNG}
              alt='travelAppImg'
              className='travelAppImg'
            />
            <a
              href='https://travel-pin-map.netlify.app/'
              target='_blank'
              rel='noreferrer'
              className='travelPinLink'
            >
              Demo
            </a>
          </div>
          <div className='blogContainer'>
            {' '}
            <h4 className='headingg'>
              Blog Application
            </h4>
            <img
              src={BLOGPNG}
              alt='blogAppImg'
              className='blogAppImg'
            />
            <a
              href='https://blog-app-mern-roc8.netlify.app/'
              target='_blank'
              rel='noreferrer'
              className='blogAppLink'
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
