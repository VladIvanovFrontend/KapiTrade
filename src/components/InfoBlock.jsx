import React from 'react';
import styles from '../styles/infoBlock.module.css';

const InfoBlock = ({title, description, button}) => {
    return (
        <section className={styles.infoBlock}>
            <h1>{title}</h1>
            {description.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
            <button
                className={`${styles.offerButton} ${button.className || ''}`}
                onClick={button.onClick}
            >
                {button.text}
            </button>
        </section>
    );
};

export default InfoBlock;