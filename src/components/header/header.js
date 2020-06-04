import React, { Component } from "react";
import './header.css';
import {Fade} from 'react-reveal';
import {Link,NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Fade top duration={1000} distance="20px">
        <div>
          <header className="header">
            <NavLink to="/" tag={Link} className="logo">
              <span className="grey-color"> &lt;</span>
              <span className="logo-name">Nimesha_Dilini</span>
              <span className="grey-color">/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/achivements"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Achievements
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}

export default Header;
