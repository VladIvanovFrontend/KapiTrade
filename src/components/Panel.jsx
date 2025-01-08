import React from 'react';
import classes from "../styles/panel.module.css";

const Panel = ({panels, title}) => {
    return (
        <section className={classes.pifWork__titleWrapper}>
            <h2 className={classes.pifWork__title}>
                {title}
            </h2>
            <div className={classes.pifPanelsWrapper}>
                {panels.map((panel, index) => (
                    <article
                        className={classes.pifWork__container}
                        key={index}
                    >
                        <img src={panel.icon} alt={"pifIcon"} className={classes.pifIcon}/>
                        <h3 className={classes.pifWork__Name}>
                            {panel.name}
                        </h3>
                        <p className={classes.pifWork__Interpretation}>
                            {panel.text}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Panel;