import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import closeSVG from 'images/icons/ui/close.svg';
import styles from 'scss/components/ui/backdrop.scss';

const backdrop = props => (
  props.isOpen ?
    <div
      aria-label="Close"
      onClick={props.onBackdropClick}
      onKeyUp={props.onBackdropKeyUp}
      role="button"
      styleName="backdrop"
      tabIndex={0}
    >
      <img alt="Close" src={closeSVG} />
    </div> :
    undefined
);

backdrop.defaultProps = {
  isOpen: false,
  onBackdropClick: undefined,
  onBackdropKeyUp: undefined,
};

backdrop.propTypes = {
  isOpen: PropTypes.bool,
  onBackdropClick: PropTypes.func,
  onBackdropKeyUp: PropTypes.func,
};

export default CSSModules(backdrop, styles);
