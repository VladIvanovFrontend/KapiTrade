import React, { useEffect, useState } from 'react';
import styles from '../styles/currencyBlock.module.css';

const CurrencyBlock = () => {
    const [currencies, setCurrencies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await fetch(
                    'https://openexchangerates.org/api/latest.json?app_id=eca097e9d52944f8a586b6ecd1a4afb7'
                );

                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                const lastUpdated = new Date(data.timestamp * 1000).toLocaleString('ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                });

                const formattedCurrencies = [
                    { ticker: 'EUR/RUB F', value: (data.rates.RUB / data.rates.EUR).toFixed(2), lastUpdated },
                    { ticker: 'USD/RUB F', value: (data.rates.RUB / data.rates.USD).toFixed(2), lastUpdated },
                    { ticker: 'CNY/RUB F', value: (data.rates.RUB / data.rates.CNY).toFixed(2), lastUpdated },
                    { ticker: 'GLD/RUB F', value: (data.rates.RUB * 0.018).toFixed(2), lastUpdated },
                ];

                setCurrencies(formattedCurrencies);
            } catch (err) {
                console.error('Ошибка при загрузке данных:', err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrencies();
    }, []);

    if (loading) {
        return <div className={styles.currencyBlock}>Загрузка данных...</div>;
    }

    if (error) {
        return <div className={styles.currencyBlock}>Ошибка: {error}</div>;
    }

    return (
        <section className={styles.currencyBlock}>
            <div className={styles.currencies}>
                {currencies.map((currency, index) => (
                    <div key={index} className={styles.currency}>
                        <span>{currency.ticker}</span>
                        <span className={styles.lastUpdated}>
                            {currency.lastUpdated}
                        </span>
                        <span>{currency.value}</span>
                    </div>
                ))}
            </div>
            {/*<button*/}
            {/*    className={`${styles.offerButton}`}*/}
            {/*    onClick={() => window.open('https://bezbrokera.ru/', '_blank')}*/}
            {/*>*/}
            {/*    Открыть предложение*/}
            {/*</button>*/}
        </section>
    );
};

export default CurrencyBlock;
