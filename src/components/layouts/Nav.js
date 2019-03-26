import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../movieComponents/Search";

class Header extends Component {
  state = {
    isOpen: true
  };

  // handleClick = e => {
  //   this.setState(prevState => {
  //     return { isOpen: !prevState.isOpen };
  //   });
  // };

  render() {
    const mainUl = (
      <React.Fragment>
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
      </React.Fragment>
    );

    return (
      <header>
        <nav>
          <div className="logo">
            <Link to="/" className="nav__brand">
              {" "}
              Movie Database
            </Link>
          </div>

          <button className="toggle-button" onClick={this.handleClick}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
          </button>
          {this.state.isOpen && mainUl}
        </nav>
      </header>
    );
  }
}

export default Header;
