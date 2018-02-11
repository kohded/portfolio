import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/ui/backdrop.scss';

const backdrop = props => (
  props.isOpen ?
    <div
      aria-label="Close"
      onClick={props.onClickToggle}
      onKeyUp={props.onKeyUpToggle}
      role="button"
      styleName="backdrop"
      tabIndex={0}
    /> :
    undefined
);

backdrop.defaultProps = {
  isOpen: false,
  onClickToggle: undefined,
  onKeyUpToggle: undefined,
};

backdrop.propTypes = {
  isOpen: PropTypes.bool,
  onClickToggle: PropTypes.func,
  onKeyUpToggle: PropTypes.func,
};

export default CSSModules(backdrop, styles);
