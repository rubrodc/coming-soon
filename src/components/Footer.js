import { useEffect, useState } from "react";
import styles from '../styles/Footer.module.css';
import { Link } from "react-router-dom";

export default function Footer() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setDate(new Date()), 1000);
		return function cleanup() {
			clearInterval(timer);
		};
	});

	return (
		<div className={`sm-container ${styles.footer}`}>
			<div className={styles['footer-links-wrapper']}>
				<div className={styles['footer-links']}>
					<h1>Explore</h1>
					<span>
						<Link to="/">
							Home
						</Link>
					</span>
					<span>
						<Link to="/about">
							About
						</Link>
					</span>
					<span>
						<Link to="/uses">
							Uses
						</Link>
					</span>
					<span>
						<Link to="/now">
							Now
						</Link>
					</span>
					<span>
						<Link to="/photos">
							Photos
						</Link>
					</span>
					<span>
						<Link to="/logos">
							Logos
						</Link>
					</span>
				</div>
				<div className={styles['footer-links']}>
					<h1>Legal</h1>
					<span>
							Colophon
					</span>
					<span>
						
							Changelog
					</span>
				</div>
				<div className={styles['footer-links']}>
					<h1>Connect</h1>
					<span>
						<Link to="/uses">
							Dribbble
						</Link>
					</span>
					<span>
						<Link to="/uses">
							Read.cv
						</Link>
					</span>
					<span>
						<Link to="/uses">
							LinkedIn
						</Link>
					</span>
				</div>
			</div>

			<div className={styles['footer-me']}>
				<span>©2024 Rúben Rodrigues</span>
				<span>{date.toLocaleTimeString()}</span>
			</div>
		</div>
	);
}
