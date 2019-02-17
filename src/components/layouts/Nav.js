import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../movieComponents/Search";

class Header extends Component {
  state = {
    isOpen: false,
    navClass: "nav__height"
  };

  handleClick = e => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <header>
        <nav>
          <div className="logo">
            <Link to="/" className="nav__brand">
              {" "}
              Movie Database
            </Link>
          </div>

          <ul className={this.state.isOpen ? "" : this.state.navClass}>
            <li id="heading">
              <Link to="/nowplaying">Now Playing</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
            <li>
              <Link to="/shows">Shows</Link>
            </li>
          </ul>
          <ul className={this.state.isOpen ? "" : this.state.navClass}>
            <li>
              <Search />
            </li>
          </ul>
        </nav>
        <div className="nav__toggle" onClick={this.handleClick}>
          XXX
        </div>
      </header>
    );
  }
}

export default Header;
