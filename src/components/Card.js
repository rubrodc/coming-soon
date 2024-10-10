import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ title, icon, text }) => {
    return (
        <div className={styles.card}>
            { title ? <h1 className={styles.title}>{title}</h1> : undefined }
            { icon ? icon : undefined }
            <p>{text}</p>
        </div>
    )
}

export default Card;
