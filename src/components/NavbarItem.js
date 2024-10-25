import React from 'react';
import '../styles/NavbarItem.css';
import CaretRightIcon from './icons/CaretRightIcon';
import { Link } from 'react-router-dom';

// NavbarItem Component
const NavbarItem = ({ icon, text, href }) => {
	return (
		<Link to={href} className='navbar-item'>
			<div className='navbar-icon'>{icon}</div>
			<span className='navbar-text'>{text}</span>
			<span className='arrow-right'>
				<CaretRightIcon />
			</span>
		</Link>
	);
};

export default NavbarItem;
