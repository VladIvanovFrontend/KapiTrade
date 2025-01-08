import React from 'react';
import classes from "../styles/board.module.css";

const Board = ({ boards, title }) => {
    return (
        <section>
            <div className={classes.popPif__titleWrapper}>
                <h2 className={classes.popPif__title}>{title}</h2>
            </div>
            <div className={classes.popPif__container}>
                {boards.map((board, index) => (
                    <article
                        className={`${classes.popPif__Wrapper} ${board.className}`}
                        key={index}
                    >
                        <p className={classes.popPif__Type}>{board.type}</p>
                        <h3 className={classes.popPif__Name}>{board.name}</h3>
                        <div className={classes.popPif__imgWrapper}>
                            <img src={board.img} alt="popPif__img" className={classes.popPif__img} />
                        </div>
                        <p className={classes.popPif__Interpretation}>{board.text}</p>
                        <button className={classes.popPif__buyButton}>{board.buttonText}</button>
                        <p className={classes.popPif__riskLevel}>{board.riskLevel}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Board;