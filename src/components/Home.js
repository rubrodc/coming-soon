import React from 'react';
import HomeContent from './HomeContent';
import HomeProjects from './HomeProjects';

const Home = () => {
	return (
		<React.Fragment>
			<HomeContent />
			<HomeProjects />
			<div className='overlay'>
				<p>
					<h1 style={{ textAlign: 'center' }}>
						New projects are shaping up.
						<br />
						Stay close!
					</h1>
				</p>
			</div>
		</React.Fragment>
	);
};

export default Home;
