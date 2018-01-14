import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/pages/home.scss';

const home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
);

export default CSSModules(home, styles);
