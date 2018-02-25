import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Nav from 'components/layout/Nav';
import logoImage from 'images/layout/logo.png';
import styles from 'scss/components/layout/header.scss';
import image from 'utils/require';

class Header extends Component {
  state = {
    isNavOpen: false,
    isPageScrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handlePageScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePageScroll);
  }

  handleNavClick = () => (
    this.setState(prevState => ({ isNavOpen: !prevState.isNavOpen }))
  );

  handlePageScroll = () => {
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
          <Nav isNavOpen={this.state.isNavOpen} />
        </div>
      </header>
    );
  }
}

export default CSSModules(Header, styles, { allowMultiple: true });
