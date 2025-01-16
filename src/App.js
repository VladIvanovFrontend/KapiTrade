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

    const boardProps = {
        title: 'Популярные ПИФы',
        boards: [
            {
                type: 'Фонд на облигации',
                name: 'Облигации с выплатой дохода',
                img: 'popPif__img1.png',
                text: 'Диверсифицированный портфель облигаций российских компаний с ежеквартальной выплатой дохода.',
                buttonText: 'Купить онлайн',
                riskLevel: 'Уровень риска низкий',
            },
            {
                type: 'Фонд на акции и облигации',
                name: 'Смешанный с выплатой дохода',
                img: 'popPif__img1.png',
                text: 'Диверсифицированный портфель из акций и облигаций российских компаний с ежеквартальной выплатой дохода.',
                buttonText: 'Купить онлайн',
                riskLevel: 'Уровень риска средний',
            },
            {
                type: 'Фонд на российские акции',
                name: 'Облигации с выплатой дохода',
                img: 'popPif__img1.png',
                text: 'Диверсифицированный портфель акций российских компаний с ежеквартальной выплатой дохода.',
                buttonText: 'Купить онлайн',
                riskLevel: 'Уровень риска высокий',
            },
        ],
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

    return (
        <div>
            <header>
            </header>
            <Header />
            <main>
                <section>
                    <InfoBlock {...infoBlockProps} />
                    <BoardTitle {...boardTitleProps}/>
                    {/*<Board {...boardProps}/>*/}
                    <Panel {...panelProps}/>
                    <hr></hr>
                    <Footer />
                </section>
            </main>
        </div>
    );
};

export default App;
