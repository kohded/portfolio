import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/home/resume.scss';
import { devIcons } from 'utils/icons';

const resume = () => {
  const renderSkillIcons = () => Object.keys(devIcons)
    .map(name => <span key={name}><img src={devIcons[name]} alt={`${name} icon`} /></span>);

  return (
    <div styleName="resume">
      <div styleName="container">
        <section id="resume" styleName="skills">
          <h1>SKILLS</h1>
          <div styleName="icons">
            {renderSkillIcons()}
          </div>
        </section>
        <section styleName="education">
          <h1>EDUCATION</h1>
          <h2>Green River College</h2>
          <p>Bachelor&apos;s Degree in Software Development &#8226; June 2017</p>
          <p>GPA 3.93 &#8226; summa cum laude</p>
          <h2>Seattle Central College</h2>
          <p>Associate&apos;s Degree in Web Development &#8226; June 2015</p>
          <p>GPA 3.96 &#8226; Dean&apos;s List &#8226; President&apos;s List</p>
        </section>
        <section styleName="certificates">
          <h1>CERTIFICATES</h1>
          <h2>Web Application Development</h2>
          <p>Green River College &#8226; December 2016</p>
          <h2>Certified Scrum Master</h2>
          <p>Scrum Alliance &#8226; July 2016 &#8226;
            <a
              href="https://www.scrumalliance.org/community/profile/akoh17"
              rel="noopener noreferrer"
              styleName="scrum-alliance-link"
              target="_blank"
            > #543521
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default CSSModules(resume, styles);
