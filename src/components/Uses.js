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

const Uses = () => {
	return (
		<div>
			<div className={`sm-container ${styles['main-container']}`}>
				<h1>Uses</h1>
				<p>
					Here's a quick rundown of all the tech and office gear I
					use. This list includes the tools that keep my workflow
					smooth, and the office gear that makes my workspace both
					functional and enjoyable.
				</p>
			</div>

			<div className={styles['section-wrapper']}>
				<div className='sm-container'>
					<h2 className={styles['text-md']}>Hardware</h2>
				</div>
                <div className={styles['md-container']}>
                    <div className={styles['hardware-wrapper']}>
                        <Link to="/uses/macbook-pro" className={styles.hardware}>
                            <img src={MacbookPro} alt='' />
                            <h3>Macbook Pro M2</h3>
                            <h4>For power and endless tabs</h4>
                        </Link>
                        <div className={styles.hardware}>
                            <img src={Iphone} alt='' />
                            <h3>Iphone 15 Pro</h3>
                            <h4>For staying connected</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={AppleWatch} alt='' />
                            <h3>Apple Watch Series 7</h3>
                            <h4>For steps and skipped notifications</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={Airpods} alt='' />
                            <h3>AirPods 4 ANC</h3>
                            <h4>For crisp sound and zero tangled cords</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={Monitor} alt='' />
                            <h3>MI Curved Gaming 34’’</h3>
                            <h4>For when size really matters</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={Headset} alt='' />
                            <h3>Sony WH-XB910N</h3>
                            <h4>For blocking out noise and bad ideas</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={Mouse} alt='' />
                            <h3>Logitech MX Master 3</h3>
                            <h4>For smoothly moving pixels like a pro</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={MacbookAir} alt='' />
                            <h3>Macbook Air M1</h3>
                            <h4>For lightweight tasks on the go</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={Victorinox} alt='' />
                            <h3>Victorinox Spartan</h3>
                            <h4>For tiny screws and big ideas</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={GoPro} alt='' />
                            <h3>GoPro HERO 12 Black</h3>
                            <h4>{`For action shots I’ll watch... someday`}</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={Canon} alt='' />
                            <h3>Canon 250D</h3>
                            <h4>For when the iPhone needs a pro backup</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={PS5} alt='' />
                            <h3>PlayStation 5</h3>
                            <h4>For endless gaming and "one more level."</h4>
                        </div>
                        <div className={styles.hardware}>
                            <img src={EFS18} alt='' />
                            <h3>EFS 18-55mm</h3>
                            <h4>Personal Beast</h4>
                        </div>
                    </div>
                </div>
			</div>

            <div className={styles['section-wrapper']}>
				<div className='sm-container'>
					<h2 className={styles['text-md']}>Software & Apps</h2>
                    <div className={styles['software-wrapper']}>
                        <div className={styles.software}>
                            <img src={Figma} alt='' />
                            <h4>Figma</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Alfred} alt='' />
                            <h4>Alfred</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={VSCode} alt='' />
                            <h4>VSCode</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Spotify} alt='' />
                            <h4>Spotify</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Slack} alt='' />
                            <h4>Slack</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={ChatGPT} alt='' />
                            <h4>ChatGPT</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Vercel} alt='' />
                            <h4>Vercel</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={GitHub} alt='' />
                            <h4>GitHub</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Proton} alt='' />
                            <h4>Proton</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Duolingo} alt='' />
                            <h4>Duolingo</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Photoshop} alt='' />
                            <h4>Photoshop</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Illustrator} alt='' />
                            <h4>Illustrator</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Ledger} alt='' />
                            <h4>Ledger</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Passwords} alt='' />
                            <h4>Passwords</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Discord} alt='' />
                            <h4>Discord</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Firefox} alt='' />
                            <h4>Firefox</h4>
                        </div>
                        <div className={styles.software}>
                            <img src={Obsidian} alt='' />
                            <h4>Obsidian</h4>
                        </div>
                    </div>
				</div>
            </div>
		</div>
	);
};

export default Uses;
