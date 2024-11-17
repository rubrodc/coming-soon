import { Link } from 'react-router-dom';
import ArrowLeft from '../../images/arrow-left.svg';
import MacbookProImg from '../../images/macbook-pro-full.png';
import IphoneProImg from '../../images/iphone-full.png';
import AppleWatchImg from '../../images/apple-watch-full.png';
import MacbookAirImg from '../../images/macbook-air-full.png';
import MonitorImg from '../../images/apple-watch-full.png';
import AirpodsImg from '../../images/airpods-full.png';
import HeadsetImg from '../../images/headset-full.png';
import MouseImg from '../../images/mouse-full.png';
import VictorinoxImg from '../../images/victornox-full.png';
import GoproImg from '../../images/gopro-full.png';
import CanonImg from '../../images/canon-full.png';
import PlayStationImg from '../../images/playstation-5-full.png';
import styles from '../../styles/HardwarePage.module.css';

export default function HardwarePage({ product }) {
	const getProductInfo = () => {
		switch (product) {
			case 'macbook-pro':
				return {
					img: MacbookProImg,
					title: 'Macbook Pro M2 Pro',
					subtitle: 'For power and endless tabs',
					description: `Here's a quick rundown of all the tech and office gear I
					use. This list includes the tools that keep my workflow
					smooth, and the office gear that makes my workspace both
					functional and enjoyable.`,
				};

			case 'iphone-15-pro':
				return {
					img: IphoneProImg,
					title: 'iPhone 15 Pro',
					subtitle: 'For when size really matters',
					description: `Here's a quick rundown of all the tech and office gear I use.
					This  list includes the tools that keep my workflow smooth, and the office
					gear that makes my workspace both functional and enjoyable.`,
				};

			case 'apple-watch':
				return {
					img: AppleWatchImg,
					title: 'Apple Watch 7',
					subtitle: 'For steps and skipped notifications',
					description: `The Apple Watch Series 7 keeps me connected and motivated. It tracks my fitness goals, monitors my heart rate, and sends notifications right to my wrist, so I never miss a beat. With its sleek design and customizable watch faces, it blends functionality with style, making it an essential part of my daily routine.`,
				};

			case 'macbook-air':
				return {
					img: MacbookAirImg,
					title: 'Macbook Air M1',
					subtitle: 'For lightweight tasks on the go',
					description: `The MacBook Air M1 is my go-to for portability and efficiency.
					It’s lightweight yet powerful, perfect for on-the-go work or casual use.
					With impressive battery life and seamless performance, I can easily switch between tasks without missing a beat.
					It’s the ideal companion for brainstorming sessions and quick edits.`,
				};

			case 'mi-curved-gaming':
				return {
					img: MonitorImg,
					title: 'MI Curved Gaming 34’’',
					subtitle: 'For when size really matters',
					description: `The MI Curved Gaming 34’’ monitor takes my visual experience to the next level.
					With its immersive display and vibrant colors, it’s perfect for both design work and gaming sessions.
					It provides the extra screen real estate I need to multitask efficiently and enjoy every pixel.`,
				};

			case 'airpods-4':
				return {
					img: AirpodsImg,
					title: 'AirPods 4 ANC',
					subtitle: 'For crisp sound and zero tangled cords',
					description: `The perfect balance between sound quality and convenience. Always with me for almost everything.
					AirPods 4 deliver rich, immersive sound with seamless connectivity. Whether working, biking, or traveling,
					they're my go-to for clear audio and effortless transitions between devices.`,
				};

			case 'sony-wh-xb910n':
				return {
					img: HeadsetImg,
					title: 'Sony WH-XB910N',
					subtitle: 'For blocking out noise and bad ideas',
					description: `The Sony WH-XB910N headphones deliver powerful sound and noise cancellation, 
					creating the perfect atmosphere for focus. Whether I’m working or relaxing, they immerse me 
					in music and keep distractions at bay, ensuring a truly enjoyable audio experience.`,
				};

			case 'logitech-mx-master-3':
				return {
					img: MouseImg,
					title: 'Logitech MX Master 3',
					subtitle: 'For smoothly moving pixels like a pro',
					description: `The Logitech MX Master 3 is my favorite mouse for precise control and comfort. 
					With customizable buttons and a smooth scrolling experience, 
					it enhances my workflow and makes navigating through projects effortless. 
					It’s the perfect tool for any designer.`,
				};

			case 'pocket-knife':
				return {
					img: VictorinoxImg,
					title: 'Victorinox Spartan',
					subtitle: 'For tiny screws and big ideas',
					description: `The Victorinox Spartan Camouflage Swiss Army Knife is my versatile sidekick for 
					everyday adventures. With multiple tools packed into a compact design, it’s perfect for tackling 
					everything from quick fixes to outdoor tasks. The stylish camouflage pattern adds a unique touch, 
					making it not just practical but also a conversation starter wherever I go!`,
				};

			case 'gopro':
				return {
					img: GoproImg,
					title: 'GoPro HERO 12',
					subtitle: 'For action shots I’ll watch... someday',
					description: `The GoPro HERO 12 is my adventure companion. It captures stunning action shots and videos, 
					whether I’m hiking, biking, or just exploring the outdoors. Its durability and compact size make it easy 
					to take anywhere, ensuring I never miss a memorable moment.`,
				};

			case 'canon-250d':
				return {
					img: CanonImg,
					title: 'Canon EOS 250D',
					subtitle: 'For when the iPhone needs a pro backup',
					description: `The Canon EOS 250D is my lightweight companion for capturing stunning photos and videos. 
					With its user-friendly interface and impressive image quality, it’s perfect for both beginners and seasoned 
					photographers. Whether I’m shooting landscapes or candid moments, this DSLR delivers the flexibility and 
					creativity I need to bring my vision to life.`,
				};

			case 'playstation-5':
				return {
					img: PlayStationImg,
					title: 'PlayStation 5',
					subtitle: 'For endless gaming and "one more level."',
					description: `The PlayStation 5 is my escape into the world of gaming. With stunning graphics and lightning-fast 
					load times, it offers an immersive experience like no other. Whether I'm diving into an epic adventure or enjoying 
					multiplayer sessions with friends, it provides endless entertainment and relaxation.`,
				};
			default:
				return {
					img: MacbookProImg,
					title: 'Macbook Pro M2 Pro',
					subtitle: 'For power and endless tabs',
					description: `Here's a quick rundown of all the tech and office gear I
					use. This list includes the tools that keep my workflow
					smooth, and the office gear that makes my workspace both
					functional and enjoyable.`,
				};
		}
	};

	const productInfo = getProductInfo();

	return (
		<div className={`sm-container`}>
			<Link className='back-link' to='/uses'>
				<img src={ArrowLeft} alt='' />
				<span>Back to uses</span>
			</Link>

			<div className={styles.wrapper}>
				<div>
					<h1 className='display-3'>{productInfo.title}</h1>
					<h2 className='headline-3'>{productInfo.subtitle}</h2>
				</div>

				<h3 className='body-1'>{productInfo.description}</h3>

				<img src={productInfo.img} alt='' />
			</div>
		</div>
	);
}
