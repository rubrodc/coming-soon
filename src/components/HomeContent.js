import React from 'react';
import styles from '../styles/HomeContent.module.css';
import Card from './Card';
import GlobeIcon from './icons/GlobeIcon';
import ComputerIcon from './icons/ComputerIcon';

const HomeContent = () => {
	return (
		<div className={styles.content}>
			<h1 className={styles.title}>
				Designing products <br /> that people love.
			</h1>
			<h2 className={styles.subtitle}>
				I bring bold ideas to life through engaging, user-focused
				designs. <br />
				Combining creativity with strategy, I craft products that are
				visually stunning and truly impactful.
			</h2>
            <div className='flex-wrapper-md justify-between'>
                <Card title="+ 30" text="Projects spanning multiple media and industries" />
                <Card icon={<GlobeIcon />} text="Vast array of clients across continents, cultures, and markets" />
                <Card icon={<ComputerIcon />} text="Currently designing product experiences at Void Software" />
            </div>

            <div className='flex-wrapper-md flex-align-center flex-gap-sm'>
                <span className={styles['green-dot']} />
                <h2 className={`${styles.subtitle} ${styles['font-500']}`}>Open to connect</h2>
            </div>
		</div>
	);
};

export default HomeContent;
