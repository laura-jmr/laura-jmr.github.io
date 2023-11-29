import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import "./Menu.css"
import { useTranslation } from 'react-i18next';

export default function Menu() {
    const [isGerman, setIsGerman] = useState(false);
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const toggleLanguage = () => {
        setIsGerman((prevIsGerman) => !prevIsGerman);

        if (!isGerman) {
            i18n.changeLanguage('de');
        } else {
            i18n.changeLanguage('en');
        }
    };

    return (
        <div id="menu-container">
            <ul id="menu-list">
                <li id="menu-list-item-tl">
                    <Link className="link-hover" to="projects">{t('menu_link_tl')}</Link>
                </li>
                <li id="menu-list-item-tr" onClick={toggleLanguage}>
                    <span style={{ fontWeight: isGerman ? 'bold' : 'normal' }}>DE</span> \\ <span style={{ fontWeight: isGerman ? 'normal' : 'bold' }}>EN</span>
                </li>
                <li id="menu-list-item-bl">
                    <a className="link-hover" href='/'>Resume</a>
                </li>
                <li id="menu-list-item-br">
                    <a className="link-hover" href='/'>Socials</a>
                </li>
            </ul>
        </div>
    )
}
