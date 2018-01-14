import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/layout/layout.scss';
import Footer from './Footer';
import Header from './Header';

const layout = props => (
  <Fragment>
    <Header />
    <main styleName="main">
      {props.children}
    </main>
    <Footer />
  </Fragment>
);

layout.defaultProps = {
  children: undefined,
};

layout.propTypes = {
  children: PropTypes.element,
};

export default CSSModules(layout, styles);
