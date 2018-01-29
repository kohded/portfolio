import React from 'react';
import CSSModules from 'react-css-modules';
import About from 'components/home/About';
import Banner from 'components/home/Banner';
import styles from 'scss/pages/home.scss';

const home = () => (
  <main styleName="home">
    <Banner />
    <About />
  </main>
);

export default CSSModules(home, styles);
