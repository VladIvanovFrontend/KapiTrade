import React from 'react';
import Header from './components/Header';
import CurrencyBlock from './components/CurrencyBlock';
import InfoBlock from './components/InfoBlock';
import './styles/App.css';
import BoardTitle from "./components/BoardTitle";
import Board from "./components/Board";
import Panel from "./components/Panel";
import Footer from "./components/Footer";

const App = () => {
    const infoBlockProps = {
        title: 'КапиТрейд — прямой доступ к торговле внебиржевым активам.',
        description: [
            'Доли в бизнесе, ГАБ, акции, ЗПИФ, валюта и многое другое.',
            'Без комиссий за сделки.',
            'В удобном сервисе.',
        ],
        button: {text: 'Открыть предложения', onClick: () => window.open('https://bezbrokera.ru/', '_blank')},
    };

    const boardTitleProps = {
        title: 'О торговле внебиржевыми активами в КапиТрейд.',
        text: '1. К торговле допускается больше видов активов, чем на бирже.\n' +
            '2. Потенциальная доходность выше, чем у биржевого рынка.\n' +
            '3. Исполнение сделок происходит непосредственно между участниками рынка, без брокера.\n'
    };

    const panelProps = {
        title: 'О торговле внебиржевыми активами в КапиТрейд',
        panels: [
            {
                name: 'Выберите подходящую сделку или создайте свое предложение',
                icon: 'pifIcon2.png',
                text: '',
            },
            {
                name: 'Обменяйтесь контактами через площадку.',
                icon: 'pifIcon1.png',
                text: '',
            },
            {
                name: 'Проведите сделку.',
                icon: 'pifIcon3.png',
                text: '',
            },
        ],
    };
    const apiUrl = 'http://bezbrokera.ru:8080/assets/by-type';

    return (
        <div>
            <header>
            </header>
            <Header />
            <main>
                <section>
                    <InfoBlock {...infoBlockProps} />
                    <BoardTitle {...boardTitleProps}/>
                    <Panel {...panelProps}/>
                    <Board title="Доска предложений" apiUrl={apiUrl}/>
                    <hr></hr>
                    <Footer />
                </section>
            </main>
        </div>
    );
};

export default App;
