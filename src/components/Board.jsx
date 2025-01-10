import React, { useState } from 'react';
import classes from "../styles/board.module.css";

const Board = ({ boards, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCardClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section>
            <div className={classes.popPif__titleWrapper}>
                <h2 className={classes.popPif__title}>{title}</h2>
            </div>

            {/* Обычная версия для десктопа */}
            <div className={`${classes.popPif__container} ${classes.desktopContainer}`}>
                {boards.map((board, index) => (
                    <article
                        className={`${classes.popPif__Wrapper} ${board.className}`}
                        key={index}
                        onClick={() => handleCardClick(index)}
                    >
                        <p className={classes.popPif__Type}>{board.type}</p>
                        <h3 className={classes.popPif__Name}>{board.name}</h3>
                        <div className={classes.popPif__imgWrapper}>
                            <img src={board.img} alt="popPif__img" className={classes.popPif__img} />
                        </div>
                        <p className={classes.popPif__Interpretation}>{board.text}</p>
                        <button
                            className={classes.popPif__buyButton}
                            onClick={() => window.open('https://bezbrokera.ru/', '_blank')}
                        >
                            {board.buttonText}
                        </button>
                        <p className={classes.popPif__riskLevel}>{board.riskLevel}</p>
                    </article>
                ))}
            </div>

            {/* Карусель для мобильной версии */}
            <div className={`${classes.popPif__container} ${classes.carouselContainer}`}>
                <article
                    className={`${classes.popPif__Wrapper} ${boards[currentIndex].className}`}
                    key={currentIndex}
                    onClick={() => handleCardClick((currentIndex + 1) % boards.length)}
                >
                    <p className={classes.popPif__Type}>{boards[currentIndex].type}</p>
                    <h3 className={classes.popPif__Name}>{boards[currentIndex].name}</h3>
                    <div className={classes.popPif__imgWrapper}>
                        <img src={boards[currentIndex].img} alt="popPif__img" className={classes.popPif__img} />
                    </div>
                    <p className={classes.popPif__Interpretation}>{boards[currentIndex].text}</p>
                    <button
                        className={classes.popPif__buyButton}
                        onClick={() => window.open('https://bezbrokera.ru/', '_blank')}
                    >
                        {boards[currentIndex].buttonText}
                    </button>
                    <p className={classes.popPif__riskLevel}>{boards[currentIndex].riskLevel}</p>
                </article>

                {/* Точки навигации */}
                <div className={classes.dotContainer}>
                    {boards.map((_, index) => (
                        <div
                            key={index}
                            className={`${classes.dot} ${index === currentIndex ? classes.activeDot : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Board;
