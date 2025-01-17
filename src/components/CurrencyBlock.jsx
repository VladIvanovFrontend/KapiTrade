    import React, { useEffect, useState } from 'react';
    import styles from '../styles/currencyBlock.module.css';

    const CurrencyBlock = ({ isHeader }) => {
        const [currencies, setCurrencies] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [isMobile, setIsMobile] = useState(false);

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
                    });

                    const formattedCurrencies = [
                        { ticker: 'EUR/RUB', value: (data.rates.RUB / data.rates.EUR).toFixed(2), lastUpdated },
                        { ticker: 'USD/RUB', value: (data.rates.RUB / data.rates.USD).toFixed(2), lastUpdated },
                        { ticker: 'CNY/RUB', value: (data.rates.RUB / data.rates.CNY).toFixed(2), lastUpdated },
                        { ticker: 'RUB/GLD', value: (data.rates.RUB * 0.018).toFixed(2), lastUpdated },
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

            const handleResize = () => setIsMobile(window.innerWidth <= 768);
            handleResize();
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

        if (loading) {
            return <div className={styles.currencyBlock}>Загрузка данных...</div>;
        }

        if (error) {
            return <div className={styles.currencyBlock}>Ошибка: {error}</div>;
        }

        return (
            <section className={styles.currencyBlock}>
                <div className={`${styles.currencies} ${isMobile ? styles.mobileCurrencies : ''}`}>
                    {currencies.map((currency, index) => (
                        <div
                            key={`currency-${index}`}
                            className={`${styles.currency} ${isHeader ? styles.headerCurrency : ''}`}
                        >
                            <span>{currency.ticker}</span>
                            <span className={styles.lastUpdated}>{currency.lastUpdated}</span>
                            <span className={styles.lastCurrency}>{currency.value}</span>
                        </div>
                    ))}
                    {currencies.map((currency, index) => (
                        <div
                            key={`currency-copy-${index}`}
                            className={`${styles.currency} ${isHeader ? styles.headerCurrency : ''}`}
                        >
                            <span>{currency.ticker}</span>
                            <span className={styles.lastUpdated}>{currency.lastUpdated}</span>
                            <span className={styles.lastCurrency}>{currency.value}</span>
                        </div>
                    ))}
                </div>
            </section>
        );
    };

    export default CurrencyBlock;
