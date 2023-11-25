import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Menu from '../components/Menu'
import "./Projects.css"
import SocialBar from "../components/SocialBar"
import ProjectCard from '../components/ProjectCard';
import Footer from './Footer'
import { useTranslation } from 'react-i18next';
import ScrollToTop from '../components/ScrollToTop';

export default function Projects() {

    const { t } = useTranslation();
    const [isGerman, setIsGerman] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        setIsGerman((prevIsGerman) => !prevIsGerman);

        if (!isGerman) {
            i18n.changeLanguage('de');
        } else {
            i18n.changeLanguage('en');
        }
    };

    var scrollPos = window.scrollY;

    const toggleExpansion = () => {
        const iconContainer = document.getElementById("projects-overview-expand-container");
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            scrollPos = window.scrollY;
            const offset = window.innerHeight * 0.7;
            console.log(window.innerHeight + " -> " + offset)
            window.scrollTo({
                top: scrollPos + offset,
                behavior: "smooth",
            });
            iconContainer.style.top = "70vh";
        } else {
            window.scrollTo({
                top: scrollPos,
                behavior: "smooth",
            });
            iconContainer.style.top = 0;
        }
    };

    return (
        <div id="projects-container">
            <ScrollToTop />
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
                <SocialBar />
            </div>
            <div id='projects-overview-container'>
                <ProjectCard
                    title={t('project_card_title1')}
                    year="/23 \\ /24"
                    description={t('project_card_description1')}
                    expandedText={t('project_card_expandedText1')}
                    imgURL={"/images/emile-perron-xrVDYZRGdw4-unsplash.jpg"}
                />
                <ProjectCard
                    title={t('project_card_title2')}
                    year="/23"
                    description={t('project_card_description2')}
                    expandedText={t('project_card_expandedText2')}
                    imgURL={"/images/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg"}
                />

            </div>
            <Footer />
        </div>
    )
}
