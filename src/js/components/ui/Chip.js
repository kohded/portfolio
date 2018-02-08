import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/ui/chip.scss';

const chip = props => (
  <div className={props.className} styleName="chip">
    <img src={props.icon} alt={`${props.name} icon`} />
    <span>{props.name}</span>
  </div>
);

chip.defaultProps = {
  className: undefined,
  icon: undefined,
  name: undefined,
};

chip.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default CSSModules(chip, styles);
