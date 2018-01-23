import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/layout/header.scss';
import logoImage from 'images/layout/logo.png';
import Nav from './Nav';

const header = () => (
  <header styleName="header">
    <div styleName="container">
      <a href="/" styleName="logo-link">
        <img alt="Logo" src={logoImage} styleName="logo-image" />
      </a>
      <Nav />
    </div>
  </header>
);

export default CSSModules(header, styles);
