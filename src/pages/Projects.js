import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Menu from '../components/Menu'
import "./Projects.css"
import SocialBar from "../components/SocialBar"

export default function Projects() {

    const [isGerman, setIsGerman] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleLanguage = () => {
        setIsGerman((prev) => !prev);
    };

    var scrollPos = window.scrollY;

    const toggleExpansion = () => {
        const iconContainer = document.getElementById("projects-overview-expand-container");
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            scrollPos = window.scrollY;
            const offset = window.innerHeight*0.7;
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
                <div>
                    <img id="projects-overview-primary-image" src="/images/emile-perron-xrVDYZRGdw4-unsplash.jpg" alt="shigeki wakabayashi japan at night" />
                    <div id="projects-overview-primary-title">
                        <h2 >Bachelor Thesis</h2>
                    </div>
                    <p id="projects-overview-year">/23 \\ /24</p>
                    <div id="projects-overview-desc-container">
                        <p>In my bachelor thesis I evaluate selected methods to measure accessibility on websites and implement improvements of selected tool features. Make the internet more accessible. For all.  </p>
                    </div>
                    <div onClick={toggleExpansion} id="projects-overview-expand-container">
                        {isExpanded && (
                            <i class="fa fa-caret-square-o-right fa-2x" aria-hidden="true"></i>
                        )}
                        {!isExpanded && (
                            <i class="fa fa-caret-square-o-down fa-2x" aria-hidden="true"></i>
                        )}</div>
                </div>                  
                {isExpanded && (
                    <div id="projects-overview-expanded-container">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
