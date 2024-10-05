import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

// Import Geist Fonts (Adjust based on how you include the fonts)
import 'non.geist'; // For Geist Sans
import HomeContent from './components/HomeContent';

const App = () => {
	return (
		<main className='home-main'>
			<Navbar />
      <div className='container'>
        <HomeContent />
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
