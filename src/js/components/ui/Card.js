import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/ui/card.scss';

const card = (props) => {
  const Element = props.element;

  return (
    <Element className={props.className} styleName="card">
      {props.children}
    </Element>
  );
};

card.defaultProps = {
  children: undefined,
  className: undefined,
  element: 'div',
};

card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  className: PropTypes.string,
  element: PropTypes.string,
};

export default CSSModules(card, styles);
