import React from "react";
import { Link } from "react-router-dom";

//components
import Search from "../../movieComponents/Search";
import NavList from "./NavList";

const Header = props => {
	return (
		<header className="header">
			<div className="logo">
				<Link to="/"> Movie Database</Link>
			</div>
			<Search />
			<nav className="user-nav">
				<NavList />
			</nav>
		</header>
	);
};

export default Header;
