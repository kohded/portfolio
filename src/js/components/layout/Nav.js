import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/layout/nav.scss';

const nav = props => (
  <nav styleName={`nav ${props.isNavOpen ? '' : 'nav-close'}`}>
    <ul styleName="nav-list">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

nav.defaultProps = {
  isNavOpen: false,
};

nav.propTypes = {
  isNavOpen: PropTypes.bool,
};

export default CSSModules(nav, styles, { allowMultiple: true });
