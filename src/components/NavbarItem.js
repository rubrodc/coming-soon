import React from 'react';
import '../styles/NavbarItem.css';
import CaretRightIcon from './icons/CaretRightIcon';

// NavbarItem Component
const NavbarItem = ({ icon, text }) => {
	return (
		<div className='navbar-item'>
			<div className='navbar-icon'>{icon}</div>
			<span className='navbar-text'>{text}</span>
			<span className='arrow-right'>
				<CaretRightIcon />
			</span>
		</div>
	);
};

export default NavbarItem;
