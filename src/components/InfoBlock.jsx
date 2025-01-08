import React from 'react';
import styles from '../styles/infoBlock.module.css';

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
                    onClick={button.onClick}
                >
                    {button.text}
                </button>
            </div>
            <div>
                <img src="/img__title.png" alt={'title__img'} className={styles.title__img}/>
            </div>
        </section>
    );
};

export default InfoBlock;