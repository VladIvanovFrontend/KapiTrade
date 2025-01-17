import React from 'react';
import classes from '../styles/header.module.css';
import CurrencyBlock from "./CurrencyBlock";

const Header = () => {
    return (<header className={classes.header__container}>
            <div className={classes.header__wrapper}
                 id={'marquee'}
            >
                <CurrencyBlock
                />
            </div>
        </header>);
};

export default Header;