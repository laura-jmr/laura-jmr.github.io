import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Menu from '../components/Menu'
import "./Projects.css"
import SocialBar from "../components/SocialBar"

export default function Projects() {

    const [isGerman, setIsGerman] = useState(true);

    const toggleLanguage = () => {
        setIsGerman((prev) => !prev);
    };
    return (
        <div id="projects-container">
            <div id="menu-container">
                <ul id="menu-list">
                    <li id="menu-list-item-tl">
                        <Link className="link-hover" to="/">Back</Link>
                    </li>
                    <li id="menu-list-item-tr" onClick={toggleLanguage}>
                        <span style={{ fontWeight: isGerman ? 'bold' : 'normal' }}>DE</span> // <span style={{ fontWeight: isGerman ? 'normal' : 'bold' }}>EN</span>
                    </li>
                </ul>
            </div>
            <div id="projects-socialbar">
            <SocialBar/>
            </div>
            <div id='projects-overview-container'>
                <img id="projects-overview-primary-image" src="/images/shigeki-wakabayashi-6nuz52vsbWc-unsplash.jpg" alt="shigeki wakabayashi japan at night" />
                <div id="projects-overview-primary-title">
                    <h2 >Bachelor Thesis</h2>
                </div>
                <p id="projects-overview-year">/23 \\ /24</p>
                <div id="projects-overview-desc-container">
                    <p>In my bachelor thesis I evaluate selected methods to measure accessibility on websites and implement improvements of selected tool features. Make the internet more accessible. For all.  </p>
                </div>
                <div id="projects-overview-expand-circle"><p>expand</p></div>
            </div>
        </div>
    )
}
