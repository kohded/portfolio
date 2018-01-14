import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/layout/header.scss';
import logoImage from 'images/logo.png';
import Nav from './Nav';

const header = () => (
  <header styleName="header">
    <img alt="Logo" src={logoImage} />
    <Nav />
  </header>
);

export default CSSModules(header, styles);
