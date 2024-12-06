import { useEffect, useState } from 'react';
import styles from '../styles/Photos.module.css';
import { photosArr } from '../utils/PhotosArr';
import Lightbox from './Lightbox';

const Photos = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'ArrowRight') {
				showNext();
			} else if (e.key === 'ArrowLeft') {
				showPrev();
			} else if (e.key === 'Escape') {
				closeLightbox();
			}
		};

		if (isOpen) {
		  window.addEventListener("keydown", handleKeyDown);
		} else {
		  window.removeEventListener("keydown", handleKeyDown);
		}
		return () => window.removeEventListener("keydown", handleKeyDown);
	  }, [isOpen]);

	const openLightbox = (index) => {
		setCurrentIndex(index);
		setIsOpen(true);
	};

	const closeLightbox = () => {
		setIsOpen(false);
	};

	const showNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % photosArr.length);
	};

	const showPrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + photosArr.length) % photosArr.length
		);
	};

	return (
		<div className={`sm-container`}>
			<h1 className={`display-1 p-title ${styles.center}`}>
				Framing life’s beauty. <br /> One click at a time.
			</h1>
			<h2
				className={`title-3 ${styles['p-subtitle']} ${styles.center} ${styles['secondary-text-color']}`}
			>
				Step into my world of photography, where life’s precious moments
				are beautifully frozen in time for you to cherish forever.
			</h2>

			<p
				className={`body-3 ${styles.center} ${styles['secondary-text-color']} ${styles['no-margin']}`}
			>
				{photosArr.length} photos
			</p>

			<div className={styles['image-container']}>
				{photosArr.map((photo, idx) => {
					return (
						<img
							key={idx}
							src={photo.url}
							alt=''
							width={photo.width}
							height={photo.height}
							// onClick={() => openLightbox(idx)}
						/>
					);
				})}
			</div>

			{/* Lightbox */}
			{/* {isOpen && (
				<Lightbox
					currentIndex={currentIndex}
					photosArr={photosArr}
					onCloseLightbox={() => setIsOpen(false)}
					onShowNext={() => showNext()}
					onShowPrev={() => showPrev()}
				/>
			)} */}
		</div>
	);
};

export default Photos;
