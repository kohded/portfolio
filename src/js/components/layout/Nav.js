import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import styles from 'scss/components/layout/nav.scss';

const nav = (props) => {
  const handleLinkClick = (event) => {
    const id = event.target.hash.replace('#', '') || 'app';
    const rect = document.getElementById(id).getBoundingClientRect();
    const headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
    const top = rect.top - headerHeight;
    smoothscroll.polyfill();
    window.scrollBy({ behavior: 'smooth', top });
  };

  const setActiveLinkStyle = link => (
    props.activeLink === link ? 'active' : ''
  );

  return (
    <nav styleName={`nav ${props.isNavOpen ? '' : 'nav-close'}`}>
      <ul styleName="nav-list">
        <li>
          <Link
            onClick={handleLinkClick}
            styleName={setActiveLinkStyle('app')}
            to="/"
          >Home
          </Link>
        </li>
        <li>
          <Link
            onClick={handleLinkClick}
            styleName={setActiveLinkStyle('about')}
            to="#about"
          >About
          </Link>
        </li>
        <li>
          <Link
            onClick={handleLinkClick}
            styleName={setActiveLinkStyle('resume')}
            to="#resume"
          >Resume
          </Link>
        </li>
        <li>
          <Link
            onClick={handleLinkClick}
            styleName={setActiveLinkStyle('portfolio')}
            to="#portfolio"
          >Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

nav.defaultProps = {
  activeLink: undefined,
  isNavOpen: false,
};

nav.propTypes = {
  activeLink: PropTypes.string,
  isNavOpen: PropTypes.bool,
};

export default CSSModules(nav, styles, { allowMultiple: true });
