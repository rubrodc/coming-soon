import styles from '../styles/Uses.module.css';
import MacbookPro from '../images/uses/macbook-pro.png';
import Iphone from '../images/uses/iphone.png';
import AppleWatch from '../images/uses/apple-watch.png';
import Airpods from '../images/uses/airpos-4.png';
import Monitor from '../images/uses/monitor.png';
import Headset from '../images/uses/headset.png';
import Mouse from '../images/uses/logitech-mouse.png';
import MacbookAir from '../images/uses/macbook-air-m1.png';
import Victorinox from '../images/uses/victorinox.png';
import GoPro from '../images/uses/gopro.png';
import Canon from '../images/uses/canon-250d.png';
import PS5 from '../images/uses/ps5.png';
import EFS18 from '../images/uses/efs-18.png';
import Figma from '../images/uses/figma.png';
import Alfred from '../images/uses/alfred.png';
import VSCode from '../images/uses/vscode.png';
import Spotify from '../images/uses/spotify.png';
import Slack from '../images/uses/slack.png';
import ChatGPT from '../images/uses/chatgpt.png';
import Vercel from '../images/uses/vercel.png';
import GitHub from '../images/uses/github.png';
import Proton from '../images/uses/proton.png';
import Duolingo from '../images/uses/duolingo.png';
import Photoshop from '../images/uses/photoshop.png';
import Illustrator from '../images/uses/illustrator.png';
import Ledger from '../images/uses/ledger.png';
import Passwords from '../images/uses/passwords.png';
import Discord from '../images/uses/discord.png';
import Firefox from '../images/uses/firefox.png';
import Obsidian from '../images/uses/obsidian.png';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowUpRight } from '../images/ic-arrow-up-right.svg';

const Uses = () => {
	return (
		<div>
			<div className={`sm-container ${styles['main-container']}`}>
				<h1 className='display-1'>Workflow Essencials</h1>
				<p className='title-3'>
					Here's a quick rundown of all the tech and office gear I
					use. This list <br /> includes the tools that keep my
					workflow smooth, and the office <br /> gear that makes my
					workspace both functional and enjoyable.
				</p>
			</div>

			<div className={styles['section-wrapper']}>
				<div className='sm-container'>
					<h2 className={`headline-1 ${styles['text-md']}`}>
						Professional <br /> Hardware
					</h2>
				</div>
				<div className={styles['md-container']}>
					<div className={styles['hardware-wrapper']}>
						<Link
							to='/uses/macbook-pro'
							className={styles.hardware}
						>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={MacbookPro} alt='' />
							<h3 className="title-3">Macbook Pro M2</h3>
							<h4 className="body-2">For power and endless tabs</h4>
						</Link>
						<Link
							to='/uses/iphone-15-pro'
							className={styles.hardware}
						>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Iphone} alt='' />
							<h3 className="title-3">Iphone 15 Pro</h3>
							<h4 className="body-2">For staying connected</h4>
						</Link>
						<Link
							to='/uses/apple-watch'
							className={styles.hardware}
						>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={AppleWatch} alt='' />
							<h3 className="title-3">Apple Watch Series 7</h3>
							<h4 className="body-2">For steps and skipped notifications</h4>
						</Link>
						<Link to='/uses/airpods-4' className={styles.hardware}>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Airpods} alt='' />
							<h3 className="title-3">AirPods 4 ANC</h3>
							<h4 className="body-2">For crisp sound and zero tangled cords</h4>
						</Link>
						<Link
							to='/uses/mi-curved-gaming'
							className={styles.hardware}
						>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Monitor} alt='' />
							<h3 className="title-3">MI Curved Gaming 34’’</h3>
							<h4 className="body-2">For when size really matters</h4>
						</Link>
						<Link
							to='/uses/sony-wh-xb910n'
							className={styles.hardware}
						>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Headset} alt='' />
							<h3 className="title-3">Sony WH-XB910N</h3>
							<h4 className="body-2">For blocking out noise and bad ideas</h4>
						</Link>
						<Link
							to='logitech-mx-master-3'
							className={styles.hardware}
						>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Mouse} alt='' />
							<h3 className="title-3">Logitech MX Master 3</h3>
							<h4 className="body-2">For smoothly moving pixels like a pro</h4>
						</Link>
						<Link
							to='/uses/macbook-air'
							className={styles.hardware}
						>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={MacbookAir} alt='' />
							<h3 className="title-3">Macbook Air M1</h3>
							<h4 className="body-2">For lightweight tasks on the go</h4>
						</Link>
						<Link
							to='/uses/pocket-knife'
							className={styles.hardware}
						>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Victorinox} alt='' />
							<h3 className="title-3">Victorinox Spartan</h3>
							<h4 className="body-2">For tiny screws and big ideas</h4>
						</Link>
						<Link to='/uses/gopro' className={styles.hardware}>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={GoPro} alt='' />
							<h3 className="title-3">GoPro HERO 12 Black</h3>
							<h4 className="body-2">{`For action shots I’ll watch... someday`}</h4>
						</Link>
						<Link to='/uses/canon-250d' className={styles.hardware}>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Canon} alt='' />
							<h3 className="title-3">Canon 250D</h3>
							<h4 className="body-2">For when the iPhone needs a pro backup</h4>
						</Link>
						<Link
							to='/uses/playstation-5'
							className={styles.hardware}
						>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={PS5} alt='' />
							<h3 className="title-3">PlayStation 5</h3>
							<h4 className="body-2">For endless gaming and "one more level."</h4>
						</Link>
						<div className={styles.hardware}>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={EFS18} alt='' />
							<h3 className="title-3">EFS 18-55mm</h3>
							<h4 className="body-2">Personal Beast</h4>
						</div>
					</div>
				</div>
			</div>

			<div className={styles['section-wrapper']}>
				<div className='sm-container'>
					<h2 className={`headline-1 ${styles['text-md']}`}>
						Software & Apps
					</h2>
				</div>

				<div className={styles['md-container']}>
					<div className={styles['hardware-wrapper']}>
						<div className={styles.software}>
							<span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Figma} alt='' />
							<h3 className="title-3">Figma</h3>
							<h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                            <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Alfred} alt='' />
							<h3 className="title-3">Alfred</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                            <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={VSCode} alt='' />
							<h3 className="title-3">VSCode</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                            <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Spotify} alt='' />
							<h3 className="title-3">Spotify</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Slack} alt='' />
							<h3 className="title-3">Slack</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={ChatGPT} alt='' />
							<h3 className="title-3">ChatGPT</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Vercel} alt='' />
							<h3 className="title-3">Vercel</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={GitHub} alt='' />
							<h3 className="title-3">GitHub</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Proton} alt='' />
							<h3 className="title-3">Proton</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Duolingo} alt='' />
							<h3 className="title-3">Duolingo</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Photoshop} alt='' />
							<h3 className="title-3">Photoshop</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Illustrator} alt='' />
							<h3 className="title-3">Illustrator</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Ledger} alt='' />
							<h3 className="title-3">Ledger</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Passwords} alt='' />
							<h3 className="title-3">Passwords</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Discord} alt='' />
							<h3 className="title-3">Discord</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Firefox} alt='' />
							<h3 className="title-3">Firefox</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>

						<div className={styles.software}>
                        <span className={styles['round-btn']}>
								<ArrowUpRight />
							</span>
							<img src={Obsidian} alt='' />
							<h3 className="title-3">Obsidian</h3>
                            <h4 className="body-2">presentations design collaboration</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Uses;
