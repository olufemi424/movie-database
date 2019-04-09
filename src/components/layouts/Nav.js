import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

//components
import Search from "../movieComponents/Search";

class Header extends Component {
  state = {
    isOpen: true
  };

  render() {
    const mainUl = (
      <React.Fragment>
        <ul className="user-nav__list">
          <li id="heading" className="user-nav__list--item">
            <NavLink className="user-nav__list--link" to="/nowplaying">
              Now Playing
            </NavLink>
          </li>
          <li className="user-nav__list--item">
            <NavLink className="user-nav__list--link" to="/popular">
              Popular
            </NavLink>
          </li>
          <li className="user-nav__list--item">
            <NavLink className="user-nav__list--link" to="/shows">
              Shows
            </NavLink>
          </li>
        </ul>
      </React.Fragment>
    );

    return (
      <header className="header">
        <div className="logo">
          <Link to="/"> Movie Database</Link>
        </div>

        <Search />

        <nav className="user-nav">{mainUl}</nav>
      </header>
    );
  }
}

export default Header;
