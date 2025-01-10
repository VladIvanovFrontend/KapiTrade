import React from 'react';
import Header from './components/Header';
import CurrencyBlock from './components/CurrencyBlock';
import InfoBlock from './components/InfoBlock';
import './styles/App.css';
import BoardTitle from "./components/BoardTitle";
import Board from "./components/Board";
import Panel from "./components/Panel";

const App = () => {
    const headerProps = {
        // Лого заменить
        logo: 'favicon.ico',
        buttons: [
            {text: 'Сейчас торгуются', onClick: () => window.open('https://bezbrokera.ru/', '_blank')},
        ],
    };

    const infoBlockProps = {
        title: 'КапиТрейд — прямой доступ к торговле внебиржевым активам.',
        description: [
            'Доли в бизнесе, ГАБ, акции, ЗПИФ, валюта и многое другое.',
            'Без комиссий за сделки.',
            'В удобном сервисе.',
        ],
        button: {text: 'Открыть предложение', onClick: () => alert('Открыть предложение')},
    };

    const boardTitleProps = {
        title: 'Что такое ПИФ',
        text: 'Паевой инвестиционный фонд — это фонд, который объединяет деньги инвесторов, чтобы вложить их в\n' +
            '                            разные финансовые инструменты: акции, облигации, недвижимость или другие. Вы можете вложить\n' +
            '                            деньги в\n' +
            '                            фонд, купив часть пая, целый пай или несколько, и потенциально заработать* на росте стоимости\n' +
            '                            своей\n' +
            '                            доли.'
    }

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
        title: 'Как работают ПИФы',
        panels: [
            {
                name: 'Облигации с выплатой дохода',
                icon: 'pifIcon1.png',
                text: 'Диверсифицированный портфель облигаций российских компаний с ежеквартальной выплатой дохода.',
            },
            {
                name: 'Смешанный с выплатой дохода',
                icon: 'pifIcon2.png',
                text: 'Диверсифицированный портфель из акций и облигаций российских компаний с ежеквартальной выплатой дохода.',
            },
            {
                name: 'Облигации с выплатой дохода',
                icon: 'pifIcon3.png',
                text: 'Диверсифицированный портфель акций российских компаний с ежеквартальной выплатой дохода.',
            },
        ],
    };

    return (
        <div>
            <header>
            </header>
            <Header {...headerProps} />
            <main>
                <aside>
                    {/*костыль, чтобы нормально отцентровать контент. Позже переделать*/}
                </aside>
                <section>
                    <InfoBlock {...infoBlockProps} />
                    <BoardTitle {...boardTitleProps}/>
                    <Board {...boardProps}/>
                    <Panel {...panelProps}/>
                </section>
                <CurrencyBlock/>
            </main>
        </div>
    );
};

export default App;
