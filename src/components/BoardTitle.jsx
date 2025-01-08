import React from 'react';
import styles from '../styles/boardTitle.module.css';

const BoardTitle = ({title, text}) => {
    return (
        <section className={styles.pif__wrapper}>
            <div className={styles.pif__container}>
                <img src="/pifImg.webp" alt={'pifImg'} className={styles.pif__img}/>
                <div className={styles.pif__details}>
                    <h3 className={styles.pif__detailsTitle}>
                        {title}
                    </h3>
                    <p className={styles.pif__details}>
                        {text}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BoardTitle;