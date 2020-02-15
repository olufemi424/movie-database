import React from "react";
import { NavLink } from "react-router-dom";

const NavList = () => {
	return (
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
};

export default NavList;
