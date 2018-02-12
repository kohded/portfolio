import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import Card from 'components/ui/Card';
import { accountIcons } from 'data/icons';
import resumeDocx from 'docs/arnold-koh-resume.docx';
import arnoldJpg from 'images/home/arnold.jpg';
import styles from 'scss/components/home/about.scss';

const about = () => {
  const renderAccountIcons = () => Object.keys(accountIcons).map(name => (
    <Link
      key={name}
      rel="noopener noreferrer"
      target="_blank"
      to={accountIcons[name].link}
    ><img src={accountIcons[name].svg} alt={`${name} icon`} />
    </Link>
  ));

  return (
    <div styleName="about">
      <Card element="section" styleName="container">
        <img src={arnoldJpg} alt="Arnold Koh" styleName="arnold-jpg" />
        <div styleName="accounts">
          {renderAccountIcons()}
        </div>
        <h1>ARNOLD KOH</h1>
        <h2>SOFTWARE DEVELOPER</h2>
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
      </Card>
    </div>
  );
};

export default CSSModules(about, styles);
