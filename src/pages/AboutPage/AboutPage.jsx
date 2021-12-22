import React from 'react';
import './AboutPage.scss';

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <h1>About</h1>
      <div className='aboutPage__infoContainer'>
        <h2>Felipe Ospina</h2>
        <p>
          Web developer specialized on front-end with React js. Currently on a
          MERN Full-Stack Bootcamp program. Passionate about technology and
          looking forward to contributing to building a better web. I am always
          looking to add value to my team and organization by taking an active
          role in the project I am working on. I am always trying to learn new
          skills and/or improve the ones I already have, and I also love to
          share them with others as it is a great form to invest in my own
          development and at the same time contribute to others development as
          well. I have had experience in customer service and entrepreneurship
          what allows me to have a different perspective as an employee.
        </p>
        <div>
          <h4>Learning highlights</h4>
          <ul>
            <li>Scrum</li>
            <li>Git / Git Flow</li>
            <li>BEM</li>
          </ul>
        </div>
        <a
          href='https://www.github.com/felipeospina21'
          rel='noreferrer'
          target='_blank'>
          github
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
