import styles from '../styles/Lightbox.module.css';
import closeBtn from '../images/gallery-close.svg';
import arrowRight from '../images/arrow-right.svg';
import arrowLeft from '../images/gallery-arrow-left.svg';

const Lightbox = ({ currentIndex, photosArr, onCloseLightbox, onShowPrev, onShowNext }) => {
	return (
		<div className={`${styles.lightbox}`}>
			<div className={styles['lightbox-header']}>
				<span>
					{currentIndex + 1}/{photosArr.length}
				</span>
				<button className={styles['close-button']} onClick={onCloseLightbox}>
					<img src={closeBtn} alt='Close' />
				</button>
			</div>
			<button className={`${styles.arrow} ${styles.left}`} onClick={onShowPrev}>
            <img
				src={arrowLeft}
				alt={`Prev`}
			/>
			</button>
			<img
				src={photosArr[currentIndex].url}
				alt={`${currentIndex + 1}`}
				className={styles['lightbox-image']}
			/>
			<button className={`${styles.arrow} ${styles.right}`} onClick={onShowNext}>
            <img
				src={arrowRight}
				alt={`Next`}
			/>
			</button>
		</div>
	);
};

export default Lightbox;
