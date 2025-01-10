import React, { useState } from 'react';
import classes from "../styles/panel.module.css";

const Panel = ({ panels, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCardClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className={classes.pifWork__titleWrapper}>
            <h2 className={classes.pifWork__title}>{title}</h2>

            {/* Обычная версия для десктопа */}
            <div className={`${classes.pifPanelsWrapper} ${classes.desktopContainer}`}>
                {panels.map((panel, index) => (
                    <article
                        className={classes.pifWork__container}
                        key={index}
                        onClick={() => handleCardClick(index)}
                    >
                        <img src={panel.icon} alt={"pifIcon"} className={classes.pifIcon} />
                        <h3 className={classes.pifWork__Name}>{panel.name}</h3>
                        <p className={classes.pifWork__Interpretation}>{panel.text}</p>
                    </article>
                ))}
            </div>

            {/* Карусель для мобильной версии */}
            <div className={`${classes.pifPanelsWrapper} ${classes.carouselContainer}`}>
                <article
                    className={classes.pifWork__container}
                    key={currentIndex}
                    onClick={() => handleCardClick((currentIndex + 1) % panels.length)}
                >
                    <img src={panels[currentIndex].icon} alt={"pifIcon"} className={classes.pifIcon} />
                    <h3 className={classes.pifWork__Name}>{panels[currentIndex].name}</h3>
                    <p className={classes.pifWork__Interpretation}>{panels[currentIndex].text}</p>
                </article>
            </div>

            {/* Точки для переключения */}
            <div className={classes.dotContainer}>
                {panels.map((_, index) => (
                    <div
                        key={index}
                        className={`${classes.dot} ${index === currentIndex ? classes.activeDot : ''}`}
                        onClick={() => handleCardClick(index)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default Panel;
