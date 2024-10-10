import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import HomeProjects from './components/HomeProjects';

// Import Geist Fonts (Adjust based on how you include the fonts)
import 'non.geist'; // For Geist Sans

const App = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setDate(new Date()), 1000);
		return function cleanup() {
			clearInterval(timer);
		};
	});

	return (
		<main className='home-main'>
			<Navbar />
			<div className='container'>
				<HomeContent />
			</div>

			<HomeProjects />
			<div className='overlay'>
				<p>
					<h1 style={{ textAlign: 'center' }}>
						New projects are shaping up.
						<br />
						Stay close!
					</h1>
				</p>

				<div className='footer'>
					<div className='footer-links-wrapper'>
						<div className='footer-links'>
							<h1>Explore</h1>
							<span>Home</span>
							<span>About</span>
							<span>Projects</span>
							<span>Now</span>
							<span>Uses</span>
						</div>
						<div className='footer-links'>
							<h1>Legal</h1>
							<span>Colophon</span>
							<span>Accessibility</span>
							<span>Changelog</span>
						</div>
						<div className='footer-links'>
							<h1>Connect</h1>
							<span>Dribbble</span>
							<span>Read.cv</span>
							<span>LinkedIn</span>
						</div>
					</div>

					<div className='footer-me'>
						<span>©2024 Rúben Rodrigues</span>
						<span>{date.toLocaleTimeString()}</span>
					</div>
				</div>
			</div>
		</main>
		// <div className="coming-soon-container">
		//   <div className="profile-section">
		//     <img
		//       src="https://avatars.githubusercontent.com/u/80220701?v=4" // Replace with your profile picture URL
		//       alt="Ruben Rodrigues"
		//       className="profile-picture"
		//     />
		//     <h1 className="name">Rúben Rodrigues</h1>
		//     <p className="role">Digital Product Designer</p>
		//   </div>

		//   <div className="social-links">
		//     <a href="https://dribbble.com/imrubro" target="_blank" rel="noopener noreferrer">
		//       Dribbble
		//     </a>
		//     <a href="https://www.linkedin.com/in/rubro-ui" target="_blank" rel="noopener noreferrer">
		//       LinkedIn
		//     </a>
		//     <a href="https://read.cv/rubro" target="_blank" rel="noopener noreferrer">
		//       Read.cv
		//     </a>
		//   </div>
		// </div>
	);
};

export default App;
