import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/home/banner.scss';
import bannerImage from 'images/home/banner.svg';

const banner = () => (
  <div styleName="banner-background">
    <div styleName="banner-container">
      <img alt="Intro banner" src={bannerImage} styleName="banner-image" />
    </div>
  </div>
);

export default CSSModules(banner, styles);
