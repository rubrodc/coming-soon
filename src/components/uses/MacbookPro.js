import { Link } from 'react-router-dom';
import ArrowLeft from '../../images/arrow-left.svg';
import MacbookProImg from '../../images/macbook-pro-full.png';
import styles from '../../styles/HardwarePage.module.css';

export default function MacbookPro() {
	return (
		<div className={`sm-container`}>
			<Link className='back-link' to='/uses'>
				<img src={ArrowLeft} alt='' />
				<span>Back to uses</span>
			</Link>

			<div className={styles.wrapper}>
				<div>
                    <h1>Macbook Pro M2 Pro</h1>
                    <h2>For power and endless tabs</h2>
                </div>

				<h3>
					Here's a quick rundown of all the tech and office gear I
					use. This list includes the tools that keep my workflow
					smooth, and the office gear that makes my workspace both
					functional and enjoyable.
				</h3>

				<img src={MacbookProImg} alt='' />
			</div>
		</div>
	);
}
