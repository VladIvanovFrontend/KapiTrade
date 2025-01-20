import React, { useState, useEffect } from 'react';
import classes from "../styles/board.module.css";

const Board = ({ title, apiUrl }) => {
    const [boards, setBoards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleCardClick = (index) => {
        setCurrentIndex(index);
    };

    const fetchOffers = async () => {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                setBoards(data);
            } else {
                setError('Получены некорректные данные');
            }
        } catch (err) {
            console.error('Ошибка при загрузке данных:', err.message);
            setError(`Ошибка при загрузке данных: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!apiUrl) {
            setError('URL API не задан');
            setLoading(false);
            return;
        }

        fetchOffers();
    }, [apiUrl]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>Ошибка: {error}</p>;
    }

    return (
        <section>
            <div className={classes.popPif__titleWrapper}>
                <h2 className={classes.popPif__title}>{title}</h2>
            </div>

            {/* Обычная версия для десктопа */}
            <div className={`${classes.popPif__container} ${classes.desktopContainer}`}>
                {boards.map((board, index) => (
                    <article
                        className={`${classes.popPif__Wrapper} ${board.isCompany ? classes.companyClass : ''}`}
                        key={board.id}
                        onClick={() => handleCardClick(index)}
                    >
                        <p className={classes.popPif__Type}>{board.type}</p>
                        <h3 className={classes.popPif__Name}>{board.name}</h3>
                        <p className={classes.popPif__Quantity}>Количество: {board.quantity}</p>
                        <p className={classes.popPif__UnitCost}>Цена за единицу: {board.unitCost}</p>
                        <p className={classes.popPif__MinLot}>Мин. лот: {board.minLot}</p>
                        <p className={classes.popPif__MaxLot}>Макс. лот: {board.maxLot}</p>
                        <p className={classes.popPif__Description}>{board.description}</p>

                        <button
                            className={classes.popPif__buyButton}
                            onClick={() => window.open(board.issuerLink, '_blank')}
                        >
                            Купить
                        </button>
                    </article>
                ))}
            </div>

            {/* Карусель для мобильной версии */}
            <div className={`${classes.popPif__container} ${classes.carouselContainer}`}>
                <article
                    className={`${classes.popPif__Wrapper} ${boards[currentIndex].isCompany ? classes.companyClass : ''}`}
                    key={boards[currentIndex].id}
                    onClick={() => handleCardClick((currentIndex + 1) % boards.length)}
                >
                    <p className={classes.popPif__Type}>{boards[currentIndex].type}</p>
                    <h3 className={classes.popPif__Name}>{boards[currentIndex].name}</h3>
                    <p className={classes.popPif__Quantity}>Количество: {boards[currentIndex].quantity}</p>
                    <p className={classes.popPif__UnitCost}>Цена за единицу: {boards[currentIndex].unitCost}</p>
                    <p className={classes.popPif__MinLot}>Мин. лот: {boards[currentIndex].minLot}</p>
                    <p className={classes.popPif__MaxLot}>Макс. лот: {boards[currentIndex].maxLot}</p>
                    <p className={classes.popPif__Description}>{boards[currentIndex].description}</p>

                    <button
                        className={classes.popPif__buyButton}
                        onClick={() => window.open(boards[currentIndex].issuerLink, '_blank')}
                    >
                        Купить
                    </button>
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
