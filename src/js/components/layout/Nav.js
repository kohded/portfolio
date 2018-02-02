import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/layout/nav.scss';

const nav = () => (
  <nav styleName="nav">
    <ul styleName="nav-list">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default CSSModules(nav, styles);