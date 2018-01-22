import React from 'react';
import CSSModules from 'react-css-modules';
import styles from 'scss/components/layout/footer.scss';

const footer = () => (
  <footer styleName="footer">
    <div styleName="container">
      <p>Copyright &copy; 2017 Kohded</p>
    </div>
  </footer>
);

export default CSSModules(footer, styles);
