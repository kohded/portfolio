import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Nav from 'components/layout/Nav';
import logoImage from 'images/layout/logo.png';
import styles from 'scss/components/layout/header.scss';
import image from 'utils/require';

class Header extends Component {
  state = {
    activeLink: 'app',
    isNavOpen: false,
    isPageScrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handlePageScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePageScroll);
  }

  setActiveLink = () => {
    document.querySelectorAll('[id]').forEach((element) => {
      if (this.state.activeLink !== element.id) {
        if (this.isInViewport(element)) {
          const hash = element.id === 'app' ? '/' : `#${element.id}`;
          window.history.pushState(undefined, undefined, hash);
          this.setState({ activeLink: element.id });
        }
      }
    });
  };

  isInViewport = (element) => {
    const rect = element.id === 'app' ?
      document.getElementsByClassName('banner-banner-1UdJ1')[0].getBoundingClientRect() :
      element.getBoundingClientRect();
    const headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
    const top = rect.top - headerHeight;

    return top <= 50 && top >= -rect.height * 0.5;
  };

  handleNavClick = () => (
    this.setState(prevState => ({ isNavOpen: !prevState.isNavOpen }))
  );

  handlePageScroll = () => {
    this.setActiveLink();

    if (!window.scrollY && this.state.isPageScrolled) {
      this.setState({ isPageScrolled: false });
    } else if (window.scrollY && !this.state.isPageScrolled) {
      this.setState({ isPageScrolled: true });
    }
  };

  render() {
    return (
      <header styleName={`header ${this.state.isPageScrolled ? 'header-scroll' : ''}`}>
        <div styleName="container">
          <a href="/" styleName="logo-link">
            <img alt="Logo" src={logoImage} />
          </a>
          <button onClick={this.handleNavClick} styleName="nav-button">
            <img src={image['menu.svg']} alt="" />
          </button>
          <Nav activeLink={this.state.activeLink} isNavOpen={this.state.isNavOpen} />
        </div>
      </header>
    );
  }
}

export default CSSModules(Header, styles, { allowMultiple: true });
