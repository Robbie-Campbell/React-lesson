import React, { Component } from 'react';

const Navbar = ({ totalCounters }) =>{
	return(
		<nav className="navbar navbar-light bg-light">
		  <a className="navbar-brand" href="#">Navbar
		  	<span className="badge badge-pill badge-secondary ml-3">{totalCounters}</span>
		  </a>
		</nav>
	)
};

export default Navbar;