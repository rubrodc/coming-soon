import React from 'react';
import styles from '../styles/HomeProjects.module.css';
import Image1 from '../images/image-1.png';
import Image2 from '../images/image-2.png';
import Image3 from '../images/image-3.png';
import Image4 from '../images/image-4.png';
import Image5 from '../images/image-5.png';
import Image6 from '../images/image-6.png';
import Image7 from '../images/image-7.png';
import Image8 from '../images/image-8.png';
import Image9 from '../images/image-9.png';
import Image10 from '../images/image-10.png';
import Image11 from '../images/image-11.png';
import Image12 from '../images/image-12.png';

const HomeProjects = () => {
    return (
        <div className={styles['image-container']}>
            <img src={Image1} alt='' width={449} height={341} />
            <img src={Image2} alt='' width={449} height={448} />
            <img src={Image3} alt='' width={449} height={448} />
            <img src={Image4} alt='' width={449} height={449} />
            <img src={Image5} alt='' width={449} height={341} />
            <img src={Image6} alt='' width={449} height={336} />
            <img src={Image7} alt='' width={449} height={336} />
            <img src={Image9} alt='' width={449} height={336} />
            <img src={Image8} alt='' width={449} height={336} />
            <img src={Image10} alt='' width={449} height={336} />
            <img src={Image12} alt='' width={449} height={336} />
            <img src={Image11} alt='' width={449} height={336} />
        </div>
    )
}

export default HomeProjects;
