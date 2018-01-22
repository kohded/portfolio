import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';

const layout = props => (
  <Fragment>
    <Header />
    {props.children}
    <Footer />
  </Fragment>
);

layout.defaultProps = {
  children: undefined,
};

layout.propTypes = {
  children: PropTypes.element,
};

export default layout;
