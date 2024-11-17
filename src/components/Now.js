import styles from '../styles/Now.module.css';
import {ReactComponent as IconLanguages} from '../images/ic-languages.svg';
import {ReactComponent as IconStars} from '../images/ic-stars.svg';
import {ReactComponent as IconApple} from '../images/ic-apple.svg';
import {ReactComponent as IconBike} from '../images/ic-bike.svg';
import {ReactComponent as IconBook} from '../images/ic-book.svg';
import {ReactComponent as IconExploring} from '../images/ic-exploring.svg';
import {ReactComponent as IconPlane} from '../images/ic-plane.svg';
import {ReactComponent as IconSpotify} from '../images/ic-spotify.svg';
import { ReactComponent as IconHeadphones} from '../images/ic-headphones.svg';

const Now = () => {
	return (
		<div className={`sm-container`}>
			<h1 className={`display-1 ${styles.center}`}>
				Now: Things I’m into
			</h1>
			<h2 className={`title-3 ${styles['secondary-text']}`}>
				Inspired by Derek Sivers. If you have your own site, you should
				make one too.
			</h2>

			<div className={`${styles['cards-wrapper']}`}>
				<div className={`${styles['cards']}`}>
					<div className={`${styles.card}`}>
						<IconLanguages className='svg' />
						<h3 className='title-3'>
							<span className={styles['card-title']}>
								Learning French.&nbsp;
							</span>
							Slowly mastering croissants and bonjours!
						</h3>
					</div>

					<div className={`${styles.card}`}>
						<IconExploring />
						<h3 className='title-3'>
							<span className={styles['card-title']}>
								Exploring new design tools.&nbsp;
							</span>
							Constantly asking, "Do I really need this plugin?
						</h3>
					</div>

					<div className={`${styles.card}`}>
						<IconBike />
						<h3 className='title-3'>
							<span className={styles['card-title']}>
								Riding my bicycle.&nbsp;
							</span>
							Or at least trying to convince myself to.
						</h3>
					</div>

					<div className={`${styles.card}`}>
						<IconApple />
						<h3 className='title-3'>
							<span className={styles['card-title']}>
								Sketching random logos.&nbsp;
							</span>
							 Half are for imaginary brands. All are genius, in
							my opinion.
						</h3>
					</div>

					<div className={`${styles.card}`}>
						<IconSpotify />
						<h3 className='title-3'>
							<span className={styles['card-title']}>
								Perfecting my Spotify playlists.&nbsp;
							</span>
							Is it work if the playlists boost creativity?
							Absolutely.
						</h3>
					</div>
				</div>

				<div className={`${styles['cards']}`}>
					<div className={`${styles.card}`}>
						<IconStars />
						<h3 className='title-3'>
							<span className={styles['card-title']}>
								Working on my personal portfolio.&nbsp;
							</span>
							Because it’s always a work in progress, right?
						</h3>
					</div>

					<div className={`${styles.card}`}>
						<IconBook />
						<h3 className='title-3'>
							<span className={styles['card-title']}>
								Reading Confluencias: Supersignos gráficos Félix
								Beltrán y Cruz Novillo.&nbsp;
							</span>
							For that sweet graphic design inspiration.
						</h3>
					</div>

					<div className={`${styles.card}`}>
						<IconHeadphones />
						<h3 className='title-3'>
							<span className={styles['card-title']}>
								Listening to Dave Ramsey's financial tips.&nbsp;
							</span>
							Spoiler: it involves a lot of “no debt.”
						</h3>
					</div>

					<div className={`${styles.card}`}>
						<IconPlane />
						<h3 className='title-3'>
							<span className={styles['card-title']}>
								Planning my next getaway.&nbsp;
							</span>
							Mostly searching for the best coffee shops in town.
						</h3>
					</div>
				</div>
			</div>

            <p className="body-1">Last updated: July 2, 2024</p>
		</div>
	);
};

export default Now;
