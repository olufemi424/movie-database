import React from "react";
import { Link } from "react-router-dom";
import Search from "../movieComponents/Search";

import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header className="">
      {/*  */}

      <nav className="navbar">
        <Link to="/">
          <div className="navbar-brand">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <Search />
      </nav>
    </header>
  );
};

export default Header;
