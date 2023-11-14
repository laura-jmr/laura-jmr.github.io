import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./Menu.css"

export default function Menu() {
    const [isGerman, setIsGerman] = useState(true);

    const toggleLanguage = () => {
        setIsGerman((prev) => !prev);
    };

    return (
        <div id="menu-container">
            <ul id="menu-list">
                <li id="menu-list-item-tl">
                    <Link className="link-hover" to="projects">Projekte & Skills</Link>
                </li>
                <li id="menu-list-item-tr" onClick={toggleLanguage}>
                    <span style={{ fontWeight: isGerman ? 'bold' : 'normal' }}>DE</span> // <span style={{ fontWeight: isGerman ? 'normal' : 'bold' }}>EN</span>
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
