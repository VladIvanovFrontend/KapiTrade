import React from 'react';
import Header from './components/Header';
import CurrencyBlock from './components/CurrencyBlock';
import InfoBlock from './components/InfoBlock';
import './App.css';

const App = () => {
    const headerProps = {
        logo: 'favicon.ico',
        buttons: [
            { text: 'Сейчас торгуются', onClick: () => alert('Сейчас торгуются') },
            { text: 'Регистрация', onClick: () => alert('Регистрация') },
            { text: 'Вход', onClick: () => alert('Вход') },
        ],
    };

    const infoBlockProps = {
        title: 'КапиТрейд — прямой доступ к торговле внебиржевым активам.',
        description: [
            'Доли в бизнесе, ГАБ, акции, ЗПИФ, валюта и многое другое.',
            'Без комиссий за сделки.',
            'В удобном сервисе.',
        ],
        button: { text: 'Открыть предложения', onClick: () => alert('Открыть предложения') },
    };

    return (
        <div>
            <Header {...headerProps} />
            <CurrencyBlock />
            <InfoBlock {...infoBlockProps} />
        </div>
    );
};

export default App;
