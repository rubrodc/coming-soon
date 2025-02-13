import React, { useContext, useEffect, useState } from 'react';
import '../styles/navbar.css';
import LightModeIcon from '../images/ic-light-mode.svg';
import DarkModeIcon from '../images/ic-dark-mode.svg';
import NavbarItem from './NavbarItem';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { Tooltip } from 'react-tooltip';
import HamburguerIcon from './icons/HamburguerIcon';
import CloseIcon from './icons/CloseIcon';

const paths = {
	home: ["/"],
	about: ["/about"],
	uses: [
	  "/uses",
	  "/uses/macbook-pro",
	  "/uses/iphone-15-pro",
	  "/uses/apple-watch",
	  "/uses/macbook-air",
	  "/uses/mi-curved-gaming",
	  "/uses/airpods-4",
	  "/uses/sony-wh-xb910n",
	  "/uses/logitech-mx-master-3",
	  "/uses/pocket-knife",
	  "/uses/gopro",
	  "/uses/canon-250d",
	  "/uses/playstation-5",
	],
	now: ['/now'],
	photos: ['/photos'],
	logos: ['/logos']
	// Add other sections and their paths here
};

const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		// eslint-disable-next-line
	}, [location]);

	const handleItemClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<React.Fragment>
			<Link to='/'>
				<img
					src='https://avatars.githubusercontent.com/u/80220701?v=4'
					alt='Company Logo'
					className='logo'
				/>
			</Link>

			<header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
				<div className='header-links'>
					<NavbarItem text='Home' href='/' isActive={paths.home.includes(location.pathname)} />
					<NavbarItem text='About' href='/about' isActive={paths.about.includes(location.pathname)} />
					<NavbarItem text='Uses' href='/uses' isActive={paths.uses.includes(location.pathname)} />
					<NavbarItem text='Now' href='/now' isActive={paths.now.includes(location.pathname)} />
					<NavbarItem text='Photos' href='/photos' isActive={paths.photos.includes(location.pathname)} />
					<NavbarItem text='Logos' href='/logos' isActive={paths.logos.includes(location.pathname)} />
				</div>
			</header>

			<div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
				<div className='mobile-menu-content'>
					<NavbarItem text='Home' href='/' isActive={paths.home.includes(location.pathname)} onClick={handleItemClick} />
					<NavbarItem text='About' href='/about' isActive={paths.about.includes(location.pathname)} onClick={handleItemClick} />
					<NavbarItem text='Uses' href='/uses' isActive={paths.uses.includes(location.pathname)} onClick={handleItemClick} />
					<NavbarItem text='Now' href='/now' isActive={paths.now.includes(location.pathname)} onClick={handleItemClick} />
					<NavbarItem text='Photos' href='/photos' isActive={paths.photos.includes(location.pathname)} onClick={handleItemClick} />
					<NavbarItem text='Logos' href='/logos' isActive={paths.logos.includes(location.pathname)} onClick={handleItemClick} />
				</div>
			</div>

			<div className="nav-buttons">
				<button
					className='theme-btn'
					onClick={toggleTheme}
					data-tooltip-id='my-tooltip'
					data-tooltip-content='Switch theme'
					data-tooltip-place='bottom-start'
				>
					<img
						src={theme === 'dark' ? DarkModeIcon : LightModeIcon}
						alt=''
					/>
					<Tooltip
						id='my-tooltip'
						className='body-3'
						style={{
							backgroundColor: 'var(--theme-tooltip-bg)',
							color: 'var(--theme-tooltip-color)',
							borderRadius: '99px',
							fontSize: '100%',
						}}
						noArrow
					/>
				</button>

				<button 
					className='hamburger-btn'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? (
						<CloseIcon />
					) : (
						<HamburguerIcon />
					)}
				</button>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
