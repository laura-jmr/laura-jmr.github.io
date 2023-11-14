import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Menu from '../components/Menu'
import "./Projects.css"
import SocialBar from "../components/SocialBar"
import ProjectCard from '../components/ProjectCard';
import Footer from './Footer'

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
                    title="Bachelor Thesis"
                    year="/23 \\ /24"
                    description="In my bachelor thesis I evaluate selected methods to measure accessibility on websites and improve selected tool features in a browser extension. Make the internet more accessible. For all."
                    expandedText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
                    imgURL={"/images/emile-perron-xrVDYZRGdw4-unsplash.jpg"}
                />
                <ProjectCard
                    title="Portfolio Website"
                    year="/23"
                    description="During some off-time I started to work on a new portfolio website, which you are currently on. I wanted to showcase myself in a professional way and display my experience. I designed everything myself while coding my website as a React Webapplication, deployed on GitHub."
                    expandedText={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
                    imgURL={"/images/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg"}
                />

            </div>
            <Footer />
        </div>
    )
}
