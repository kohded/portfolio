import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/pages/home.scss';

const home = () => (
  <div styleName="page">
    <main styleName="container">
    </main>
  </div>
);

export default CSSModules(home, styles);
