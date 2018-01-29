import React from 'react';
import CSSModules from 'react-css-modules';
import Nav from 'components/layout/Nav';
import logoImage from 'images/layout/logo.png';
import styles from 'scss/components/layout/header.scss';

const header = () => (
  <header styleName="header">
    <div styleName="container">
      <a href="/" styleName="logo-link">
        <img alt="Logo" src={logoImage} />
      </a>
      <Nav />
    </div>
  </header>
);

export default CSSModules(header, styles);
