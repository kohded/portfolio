import React from 'react';
import CSSModules from 'react-css-modules';
import resumeDocx from 'docs/arnold-koh-resume.docx';
import arnoldJpg from 'images/home/arnold.jpg';
import githubSvg from 'images/home/github.svg';
import linkedinSvg from 'images/home/linkedin.svg';
import mediumSvg from 'images/home/medium.svg';
import styles from 'scss/components/home/about.scss';

const about = () => (
  <div styleName="about">
    <section styleName="container">
      <img src={arnoldJpg} alt="Arnold Koh" styleName="arnold-jpg" />
      <div styleName="accounts">
        <a
          href="https://www.linkedin.com/in/kohded"
          rel="noopener noreferrer"
          styleName="account-link"
          target="_blank"
        >
          <img src={linkedinSvg} alt="Linkedin logo" styleName="logo-svg" />
        </a>
        <a
          href="https://github.com/kohded"
          rel="noopener noreferrer"
          styleName="account-link"
          target="_blank"
        >
          <img src={githubSvg} alt="GitHub logo" styleName="logo-svg" />
        </a>
        <a
          href="https://medium.com/@kohded"
          rel="noopener noreferrer"
          styleName="account-link"
          target="_blank"
        >
          <img src={mediumSvg} alt="Medium logo" styleName="logo-svg" />
        </a>
      </div>
      <h1>ARNOLD KOH</h1>
      <h3>SOFTWARE DEVELOPER</h3>
      <p styleName="summary">
        Recent graduate with project experience in all phases of software development life cycle
        using agile methodologies, from collaborating with clients in the planning stage, software
        and database design, code implementation, testing, to product deployment. Seeking
        opportunities as a Software Engineer to develop high quality applications while utilizing
        best practices in a collaborative environment.
      </p>
      <a href={resumeDocx} download="arnold-koh-resume" styleName="resume-link">
        DOWNLOAD RESUME
      </a>
    </section>
  </div>
);

export default CSSModules(about, styles);
