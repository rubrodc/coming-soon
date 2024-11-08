import React from 'react';
import '../styles/NavbarItem.css';
import { Link, useLocation } from 'react-router-dom';

// NavbarItem Component
const NavbarItem = ({ text, href }) => {
	const location = useLocation();

	const isActive = location.pathname === href;

	return (
		<Link to={href} className={`${ isActive ? 'navbar-active ' : ''}navbar-item body-3`}>
			<span className='navbar-text'>{text}</span>
			{
				isActive && <span className='active-border' />
			}
		</Link>
	);
};

export default NavbarItem;
