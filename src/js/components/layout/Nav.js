import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/layout/nav.scss';

const nav = () => (
  <nav styleName="nav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Resume</a></li>
      <li><a href="/">Portfolio</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
  </nav>
);

export default CSSModules(nav, styles);
