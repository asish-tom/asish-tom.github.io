import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
class Navbar extends React.Component {
  toggleHam(prevState) {
    this.setState({ isToggle: !prevState.isToggle }, () => {});
  }

  constructor(props) {
    super(props);
    this.state = {
      isToggle: true,
    };
    this.toggleHam = this.toggleHam.bind(this);
  }

  render() {
    let menuClassName = 'links-wrapper show-from-mob';
    if (this.state.isToggle) {
      menuClassName = 'links-wrapper';
    } else {
      menuClassName = 'links-wrapper show-from-mob';
    }
    return (
      <div className="nav-container">
        <div className="navbar-wrapper">
          <div className="ham-menu">
            <FontAwesomeIcon onClick={this.toggleHam} icon={faBars} />
          </div>
          <div
            className="name"
            role="button"
            tabIndex={-1}
            onKeyDown={() => {}}
          >
            ASISH
          </div>
          <div className={menuClassName}>
            <NavLink
              className="link-selector"
              activeClassName="active"
              to="/home"
              onClick={this.toggleHam}
            >
              HOME
            </NavLink>
            <NavLink
              className="link-selector"
              activeClassName="active"
              to="/about"
              onClick={this.toggleHam}
            >
              RESUME
            </NavLink>
            <NavLink
              className="link-selector"
              activeClassName="active"
              to="/blog"
              onClick={this.toggleHam}
            >
              BLOG
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
