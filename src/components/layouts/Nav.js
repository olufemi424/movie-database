import React from "react";
import { Link } from "react-router-dom";
import Search from "../movieComponents/Search";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/" className="nav_brand">
            {" "}
            Movie Database
          </Link>
        </div>

        <ul>
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
        <ul>
          <li>
            <Search />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
