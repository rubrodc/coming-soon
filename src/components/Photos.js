import styles from '../styles/Photos.module.css';
import { photosArr } from '../utils/PhotosArr';

const Photos = () => {
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
                {
                    photosArr.map((photo, idx) => {
                        return (
                            <img key={idx} src={photo.url} alt='' width={photo.width} height={photo.height} />
                        )
                    })
                }
			</div>
		</div>
	);
};

export default Photos;
