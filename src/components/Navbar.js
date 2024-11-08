import React, { useContext, useEffect } from 'react';
import '../styles/navbar.css';
import LightModeIcon from '../images/ic-light-mode.svg';
import DarkModeIcon from '../images/ic-dark-mode.svg';
import NavbarItem from './NavbarItem';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		// eslint-disable-next-line
	}, [location]);

	console.log(theme);

	return (
		<React.Fragment>
			<Link to='/'>
				<img
					src='https://avatars.githubusercontent.com/u/80220701?v=4'
					alt='Company Logo'
					className='logo'
				/>
			</Link>

			<header className='header'>
				<div className='header-links'>
					<NavbarItem text='Home' href='/' />
					<NavbarItem text='About' href='/about' />
					<NavbarItem text='Uses' href='/uses' />
					<NavbarItem text='Now' href='/now' />
					<NavbarItem text='Photos' href='/photos' />
					<NavbarItem text='Logos' href='/logos' />
				</div>
			</header>

			<button className='theme-btn' onClick={toggleTheme}>
				<img
					src={theme === 'dark' ? DarkModeIcon : LightModeIcon}
					alt=''
				/>
			</button>
		</React.Fragment>
	);
};

export default Navbar;
