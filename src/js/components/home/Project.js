import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import Card from 'components/ui/Card';
import Chip from 'components/ui/Chip';
import styles from 'scss/components/home/project.scss';

const project = (props) => {
  const renderTechnologies = technologies => Object.keys(technologies).map(technology => (
    <Chip
      alt={`${technology} icon`}
      image={technologies[technology]}
      key={technology}
      text={technology}
    />
  ));

  return (
    <Card
      ariaLabel={props.ariaLabel}
      className={props.className}
      onClick={props.onClick}
      onKeyUp={props.onKeyUp}
      role={props.role}
      styleName="project"
      tabIndex={props.tabIndex}
    >
      <div styleName="image">
        <img alt={`${props.client} logo`} src={props.projectImage} />
        <div styleName="overlay">
          <span>View Project</span>
        </div>
      </div>
      <div styleName="content">
        <h2>{props.client}</h2>
        <h3>{props.project}</h3>
        <p>{props.date}</p>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          to={props.url}
        >Link
        </Link>
        <div styleName="technologies">
          {renderTechnologies(props.technologies)}
        </div>
      </div>
    </Card>
  );
};

project.defaultProps = {
  ariaLabel: undefined,
  className: undefined,
  client: undefined,
  date: undefined,
  onClick: undefined,
  onKeyUp: undefined,
  project: undefined,
  projectImage: undefined,
  role: undefined,
  tabIndex: undefined,
  technologies: undefined,
  url: undefined,
};

project.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  client: PropTypes.string,
  date: PropTypes.string,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  project: PropTypes.string,
  projectImage: PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.number,
  technologies: PropTypes.objectOf(PropTypes.string),
  url: PropTypes.string,
};

export default CSSModules(project, styles);
