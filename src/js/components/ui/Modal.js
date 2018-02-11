import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';
import Backdrop from 'components/ui/Backdrop';
import Card from 'components/ui/Card';
import styles from 'scss/components/ui/modal.scss';

const modal = props => (
  <Fragment>
    <Backdrop
      isOpen={props.isOpen}
      onClickToggle={props.onClickToggle}
      onKeyUpToggle={props.onKeyUpToggle}
    />
    <Card
      className={props.className}
      role="dialog"
      styleName={`modal ${props.isOpen ? '' : 'modal-close'}`}
    >
      {props.children}
    </Card>
  </Fragment>
);

modal.defaultProps = {
  children: undefined,
  className: undefined,
  isOpen: false,
  onClickToggle: undefined,
  onKeyUpToggle: undefined,
};

modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClickToggle: PropTypes.func,
  onKeyUpToggle: PropTypes.func,
};

export default CSSModules(modal, styles, { allowMultiple: true });
