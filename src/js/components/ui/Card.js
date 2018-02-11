import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/ui/card.scss';

const card = (props) => {
  const Element = props.element;

  return (
    <Element
      aria-label={props.ariaLabel}
      className={props.className}
      onClick={props.onClick}
      onKeyUp={props.onKeyUp}
      role={props.role}
      styleName="card"
      tabIndex={props.tabIndex}
    >
      {props.children}
    </Element>
  );
};

card.defaultProps = {
  ariaLabel: undefined,
  children: undefined,
  className: undefined,
  element: 'div',
  onClick: undefined,
  onKeyUp: undefined,
  role: undefined,
  tabIndex: -1,
};

card.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  className: PropTypes.string,
  element: PropTypes.string,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  role: PropTypes.string,
  tabIndex: PropTypes.number,
};

export default CSSModules(card, styles);
