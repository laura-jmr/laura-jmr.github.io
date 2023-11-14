import React, { useState, useRef } from 'react'
import "./ProjectCard.css"

export default function ProjectCard({ title, description, year, expandedText, imgURL }) {
    const expandContainerRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    var scrollPos = window.scrollY;
    var expandContainerRefTop = 0;



    const toggleExpansion = () => {
        if (expandContainerRef.current) {

            setIsExpanded(!isExpanded);
            if (!isExpanded) {
                scrollPos = window.scrollY;
                const offset = window.innerHeight * 0.7;
                window.scrollTo({
                    top: scrollPos + offset,
                    behavior: "smooth",
                });
                expandContainerRefTop = expandContainerRef.current.getBoundingClientRect().top;
                expandContainerRef.current.style.top = window.innerHeight * 0.7 + "px";
            } else {
                window.scrollTo({
                    top: scrollPos,
                    behavior: "smooth",
                });
                expandContainerRef.current.style.top = expandContainerRefTop + "px";
            }
        }
    };

    return (

        <div id='project-card-overview-container'>
            <div>
                <img id="projects-overview-primary-image" src={imgURL} alt="shigeki wakabayashi japan at night" />
                <div id="projects-overview-primary-title">
                    <h2>{title}</h2>
                </div>
                <p id="projects-overview-year">{year}</p>
                <div id="projects-overview-desc-container">
                    <p>{description}</p>
                </div>
                <div ref={expandContainerRef} onClick={toggleExpansion} id="projects-overview-expand-container">
                    {isExpanded && (
                        <i className="fa fa-caret-square-o-right fa-2x" aria-hidden="true"></i>
                    )}
                    {!isExpanded && (
                        <i className="fa fa-caret-square-o-down fa-2x" aria-hidden="true"></i>
                    )}</div>
            </div>
            {isExpanded || window.innerWidth < 600 ? (
                <div id="projects-overview-expanded-container">
                    <p>{expandedText}</p>
                </div>
            ) : null}
        </div>

    )
}
