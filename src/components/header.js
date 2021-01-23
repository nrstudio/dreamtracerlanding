import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';

import logomark from '../img/logomark_small.png';

const Header = (props) => {
	return (
		<nav>
			<h2 className="site-title">{props.title}</h2>
			<img src={logomark} alt="Cloud Logo" className="logomark"/>
			<ul className="nav-links">
				<a href="#"><li className="nav-link">Download</li></a>
				<a href="#"><li className="nav-link">About</li></a>
				<a href="#"><li className="nav-link">Credits</li></a>
			</ul>
		</nav>
	);
}

export default Header
