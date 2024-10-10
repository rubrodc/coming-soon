import React, { useState } from 'react';
import '../styles/navbar.css';
import HamburguerIcon from '../images/hamburguer.svg';
import CloseIcon from '../images/close.svg';
import HomeIcon from './icons/HomeIcon';
import NavbarItem from './NavbarItem';
import AboutIcon from './icons/AboutIcon';
import AccessibilityIcon from './icons/AccessibilityIcon';
import ProjectsIcon from './icons/ProjectsIcon';
import NowIcon from './icons/NowIcon';
import UsesIcon from './icons/UsesIcon';
import PhotosIcon from './icons/PhotosIcon';
import ColophonIcon from './icons/ColophonIcon';
import ChangelogIcon from './icons/ChangelogIcon';
import DribbbleIcon from './icons/DribbbleIcon';
import ReadCVIcon from './icons/ReadCVIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Navbar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// Toggle function for dropdown
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<header className={`header ${isDropdownOpen ? 'open' : ''}`}>
			<div className='header-content'>
				{/* Logo image */}
				<img
					src='https://avatars.githubusercontent.com/u/80220701?v=4'
					alt='Company Logo'
					className='logo'
				/>

				{/* Text container right next to the image */}
				<div className='text-container'>
					<h1 className='title'>Rúben Rodrigues</h1>
					<p className='subtitle'>Digital Product Designer</p>
				</div>

				{/* Buttons */}
				<div className='buttons-container'>
					<button className='contact-btn'>Contact</button>
					<button
						type='button'
						className='menu-btn'
						aria-expanded={isDropdownOpen}
						aria-controls='dropdown-content'
						onClick={toggleDropdown}
					>
						<img
							src={isDropdownOpen ? CloseIcon : HamburguerIcon}
							alt='Menu'
						/>
					</button>
				</div>
			</div>

			{/* Hidden content to expand when the dropdown is open */}
			<nav
				id='dropdown-content'
				className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}
				aria-hidden={!isDropdownOpen}
			>
				<div className='dropdown-content-wrapper'>
					<div className='dropdown-content-wrapper-menu'>
						<h1>Explore</h1>
						<div className='dropdown-content-wrapper-menu-items'>
						<NavbarItem icon={<HomeIcon />} text='Home' />
						<NavbarItem icon={<AboutIcon />} text='About' />
						<NavbarItem icon={<ProjectsIcon />} text='Projects' />
						<NavbarItem icon={<NowIcon />} text='Now' />
						<NavbarItem icon={<UsesIcon />} text='Uses' />
						<NavbarItem icon={<PhotosIcon />} text='Photos' />
						</div>
					</div>
					<div className='dropdown-content-wrapper-menu'>
						<h1>Others</h1>
						<div className='dropdown-content-wrapper-menu-items'>
						<NavbarItem icon={<ColophonIcon />} text='Colophon' />
						<NavbarItem icon={<AccessibilityIcon />} text='Accessibility' />
						<NavbarItem icon={<ChangelogIcon />} text='Changelog' />
						</div>
					</div>
					<div className='dropdown-content-wrapper-menu'>
						<h1>Connect</h1>
						<div className='dropdown-content-wrapper-menu-items'>
						<NavbarItem icon={<DribbbleIcon />} text='Dribbble' />
						<NavbarItem icon={<ReadCVIcon />} text='React.cv' />
						<NavbarItem icon={<LinkedinIcon />} text='LinkedIn' />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
