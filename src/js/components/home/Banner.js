import React from 'react';
import CSSModules from 'react-css-modules';
import bannerImage from 'images/home/banner.svg';
import styles from 'scss/components/home/banner.scss';

const banner = () => (
  <div styleName="banner">
    <div styleName="container">
      <img alt="Intro banner" src={bannerImage} styleName="image" />
    </div>
  </div>
);

export default CSSModules(banner, styles);
