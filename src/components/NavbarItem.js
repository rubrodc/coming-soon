import React from 'react';
import '../styles/NavbarItem.css';
import { Link } from 'react-router-dom';

// NavbarItem Component
const NavbarItem = ({ text, href, isActive, onClick }) => {
	return (
		<Link 
			to={href} 
			className={`${ isActive ? 'navbar-active ' : ''}navbar-item body-3`}
			onClick={onClick}
		>
			<span className='navbar-text'>{text}</span>
			{
				isActive && <span className='active-border' />
			}
		</Link>
	);
};

export default NavbarItem;
