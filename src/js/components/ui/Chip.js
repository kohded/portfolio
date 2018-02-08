import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/ui/chip.scss';

const chip = props => (
  <div className={props.className} styleName="chip">
    <img alt={props.alt} src={props.image} />
    <span>{props.text}</span>
  </div>
);

chip.defaultProps = {
  alt: undefined,
  className: undefined,
  image: undefined,
  text: undefined,
};

chip.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default CSSModules(chip, styles);
