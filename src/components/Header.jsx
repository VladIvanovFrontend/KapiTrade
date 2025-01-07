import React from 'react';
import classes from '../styles/header.module.css';

const Header = ({ logo, buttons }) => {
    return (
        <header className={classes.header__container}>
            <div className={classes.header__logoWrapper}>
                <img src={logo} alt="logo" className={classes.header__logo} />
            </div>
            <div className={classes.header__buttons}>
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`${classes.header__button} ${button.className}`}
                        index={button.index}
                        onClick={button.onClick}
                    >
                        {button.text}
                    </button>
                ))}
            </div>
        </header>
    );
};

export default Header;