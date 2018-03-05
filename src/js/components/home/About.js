import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import Card from 'components/ui/Card';
import links from 'data/links';
import resumeDocx from 'docs/arnold-koh-resume.docx';
import image from 'utils/require';
import styles from 'scss/components/home/about.scss';
import { accountIcons } from 'utils/icons';

class About extends Component {
  state = {
    mail: undefined,
  };

  renderMail = () => {
    this.setState({
      mail: String.fromCharCode(
        109, 97, 105, 108, 116, 111, 58, 99, 111, 110, 116, 97, 99, 116, 64, 107, 111, 104, 100,
        101, 100, 46, 99, 111, 109,
      ),
    });
  };

  renderAccountIcons = () => Object.keys(accountIcons).map(name => (
    <Link
      key={name}
      rel="noopener noreferrer"
      target="_blank"
      to={links.accounts[name]}
    ><img alt={`${name} icon`} src={accountIcons[name]} />
    </Link>
  ));

  render() {
    return (
      <div styleName="about">
        <Card element="section" id="about" styleName="container">
          <img alt="Arnold Koh" src={image['arnold.jpg']} styleName="arnold-jpg" />
          <div styleName="accounts">
            <a href={this.state.mail} onClick={this.renderMail}>
              <img alt="Email icon" src={image['email.svg']} />
            </a>
            {this.renderAccountIcons()}
          </div>
          <h1>ARNOLD KOH</h1>
          <h2>SOFTWARE DEVELOPER</h2>
          <p styleName="summary">
            Recent graduate with project experience in all phases of software development life cycle
            using agile methodologies, from collaborating with clients in the planning stage,
            software and database design, code implementation, testing, to product deployment.
            Seeking opportunities as a Software Developer to develop high quality applications while
            utilizing best practices in a collaborative environment.
          </p>
          <a href={resumeDocx} download="arnold-koh-resume" styleName="resume-link">
            DOWNLOAD RESUME
          </a>
        </Card>
      </div>
    );
  }
}

export default CSSModules(About, styles);
