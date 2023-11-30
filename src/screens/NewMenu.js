import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./NewMenu.css"
import { useTranslation } from 'react-i18next';
import NewSocialBar from '../components/NewSocialBar';

export default function Menu({ isSubpage, scrollToRef }) {
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
                <div id="menu-container">
                    <ul id="menu-list">
                        <li id="menu-list-item-tl">
                            <Link className="link-hover" to="/">Back</Link>
                        </li>
                        <li id="menu-list-item-tr" onClick={toggleLanguage}>
                            <span style={{ fontWeight: isGerman ? 'bold' : 'normal' }}>DE</span> // <span style={{ fontWeight: isGerman ? 'normal' : 'bold' }}>EN</span>
                        </li>
                    </ul>
                    <NewSocialBar isSubPage={true}/>
                </div>
            );
        } else {
            return (
                <div id="menu-container">
                    <ul id="menu-list">
                        <li id="menu-list-item-tl">
                            <Link className="link-hover" to="projects">{t('menu_link_tl')}</Link>
                        </li>
                        <li id="menu-list-item-tr" onClick={toggleLanguage}>
                            <span style={{ fontWeight: isGerman ? 'bold' : 'normal' }}>DE</span> \\ <span style={{ fontWeight: isGerman ? 'normal' : 'bold' }}>EN</span>
                        </li>
                        <li id="menu-list-item-bl" onClick={() => scrollToRef('skillsRef')}>
                            <p className="link-hover">{t('menu_link_bl')}</p>
                        </li>
                        <li id="menu-list-item-br">
                            <a className="link-hover" href='/'>{t('menu_link_br')}</a>
                        </li>
                    </ul>
                    <NewSocialBar isSubPage={false}/>
                </div>
            );
        }
    };

    return (
        <>
            {renderMenuItems()}
        </>
    )
}
