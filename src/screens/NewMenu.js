import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./NewMenu.css"
import { useTranslation } from 'react-i18next';
import SocialBar from '../components/SocialBar';

export default function Menu({ isSubpage }) {
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
    const renderMenuItems = () => {
        if (isSubpage) {
            return (
                <ul id="menu-list">
                    <li id="menu-list-item-tl">
                        <Link className="link-hover" to="/">Back</Link>
                    </li>
                    <li id="menu-list-item-tr" onClick={toggleLanguage}>
                        <span style={{ fontWeight: isGerman ? 'bold' : 'normal' }}>DE</span> // <span style={{ fontWeight: isGerman ? 'normal' : 'bold' }}>EN</span>
                    </li>
                </ul>
            );
        } else {
            return (
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
            );
        }
    };

    return (
        <div id="menu-container">
            {renderMenuItems()}
            <SocialBar />
        </div>
    )
}
