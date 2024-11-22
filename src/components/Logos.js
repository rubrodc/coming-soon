import styles from '../styles/Logos.module.css';
import { ReactComponent as Logo1 } from '../images/logos/logo-1.svg';
import { ReactComponent as Logo2 } from '../images/logos/logo-2.svg';
import { ReactComponent as Logo3 } from '../images/logos/logo-3.svg';
import { ReactComponent as Logo4 } from '../images/logos/logo-4.svg';
import { ReactComponent as Logo5 } from '../images/logos/logo-5.svg';
import { ReactComponent as Logo6 } from '../images/logos/logo-6.svg';
import { ReactComponent as Logo7 } from '../images/logos/logo-7.svg';
import { ReactComponent as Logo8 } from '../images/logos/logo-8.svg';
import { ReactComponent as Logo9 } from '../images/logos/logo-8.svg';
import { ReactComponent as Logo10 } from '../images/logos/logo-10.svg';
import { ReactComponent as Logo11 } from '../images/logos/logo-11.svg';
import { ReactComponent as Logo12 } from '../images/logos/logo-12.svg';
import { ReactComponent as Logo13 } from '../images/logos/logo-13.svg';
import { ReactComponent as Logo14 } from '../images/logos/logo-14.svg';
import { ReactComponent as Logo15 } from '../images/logos/logo-15.svg';
import { ReactComponent as Logo16 } from '../images/logos/logo-16.svg';
import { ReactComponent as Logo17 } from '../images/logos/logo-17.svg';
import { ReactComponent as Logo18 } from '../images/logos/logo-18.svg';
import { ReactComponent as Logo19 } from '../images/logos/logo-19.svg';
import { ReactComponent as Logo20 } from '../images/logos/logo-20.svg';
import { ReactComponent as Logo21 } from '../images/logos/logo-21.svg';

const Logos = () => {
	return (
		<div className={`sm-container`}>
			<h1 className={`display-1 p-title ${styles.center}`}>
            Simple Elegance. <br /> Lasting Impressions.
			</h1>
			<h2
				className={`title-3 ${styles['p-subtitle']} ${styles.center} ${styles['secondary-text-color']}`}
			>
				Where simplicity meets sophistication, my logo designs aim to create an indelible impression that stands the test of time.
			</h2>

            <div className={styles['image-container']}>
                <Logo1 className={styles.logo} />
                <Logo2 className={styles.logo} />
                <Logo3 className={styles.logo} />
                <Logo4 className={styles.logo} />
                <Logo5 className={styles.logo} />
                <Logo6 className={styles.logo} />
                <Logo7 className={styles.logo} />
                <Logo8 className={styles.logo} />
                <Logo9 className={styles.logo} />
                <Logo10 className={styles.logo} />
                <Logo11 className={styles.logo} />
                <Logo12 className={styles.logo} />
                <Logo13 className={styles.logo} />
                <Logo14 className={styles.logo} />
                <Logo15 className={styles.logo} />
                <Logo16 className={styles.logo} />
                <Logo17 className={styles.logo} />
                <Logo18 className={styles.logo} />
                <Logo19 className={styles.logo} />
                <Logo20 className={styles.logo} />
                <Logo21 className={styles.logo} />
			</div>

		</div>
	);
};

export default Logos;
