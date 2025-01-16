import React from 'react';
import styles from '../styles/infoBlock.module.css';
import CurrencyBlock from "./CurrencyBlock";

const InfoBlock = ({title, description, button}) => {
    return (
        <section className={styles.title__wrapper}>
            <div className={styles.title__container}>
                <h1 className={styles.title}>
                    {title}
                </h1>
                <ul className={styles.title__text}>
                    {description.map((text, index) => (
                        <li key={index} className={styles.title__list}>{text}</li>
                    ))}
                </ul>
                <button
                    className={`${styles.title__buttonBuy} ${button.className || ''}`}
                    onClick={() => window.open('https://bezbrokera.ru/', '_blank')}
                >
                    {button.text}
                </button>
            </div>
            <div className={styles.currency}>
                <CurrencyBlock/>
            </div>
        </section>
    );
};

export default InfoBlock;