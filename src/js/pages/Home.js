import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/pages/home.scss';
import Banner from 'components/home/Banner';

const home = () => (
  <div styleName="page">
    <Banner />
    <main styleName="main" />
  </div>
);

export default CSSModules(home, styles);
