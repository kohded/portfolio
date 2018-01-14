import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/layout/footer.scss';

const footer = () => (
  <footer styleName="footer">
    <p>Copyright &copy; 2017 Kohded</p>
  </footer>
);

export default CSSModules(footer, styles);
