import React from 'react';
import styles from '../styles/footer.module.css';
import footerText from '../text/footerText';

const Footer = () => {
    return (
        <footer className={styles.footer__wrapper}>
            <details>
                <summary>
                   {footerText.contactsTitle}
                </summary>
                <ul>
                    <li>{footerText.contactsTIN}</li>
                    <li>{footerText.contactsNumb}</li>
                    <li>{footerText.contactsEmail}</li>
                </ul>
        </details>
    <ul>
        <li>
            {footerText.contactPerson}
        </li>
        <li>
            <a href={footerText.privacyPolicyLink} target="_blank">Политика конфиденциальности</a>
        </li>
        <li>
            <a href={footerText.termsOfServiceLink} target="_blank">Правила использования сервиса</a>
        </li>
    </ul>
    <p>{footerText.disclaimer}</p>
    <details>
        <summary>Читать далее...</summary>
        <p>{footerText.readMore}</p>
    </details>
</footer>
)
    ;
};

export default Footer;
