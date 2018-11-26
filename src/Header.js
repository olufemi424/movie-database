import React from "react";
import { Link } from "react-router-dom";

import logo from "./logo.png";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
