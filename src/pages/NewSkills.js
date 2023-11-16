import React from 'react'
import "./NewSkills.css"
import { Link } from "react-router-dom";

export default function NewSkills() {
    return (
        <div id="page-skills-container">
            <div id="skills-inner-container">
                <h1>Proficiencies</h1>
                <div id="skills-section-container">
                    <div className='skills-section'>
                        <h2>\ Backend</h2>
                        <div>
                            <p>
                                Software Web Developement<br />
                                Components and Databases<br />
                                Python // SQL // MongoDB
                            </p>
                        </div>
                    </div>
                    <div className='skills-section middle'>
                        <h2>\ Frontend</h2>
                        <div>
                            <p>
                                Visual Web Developement<br />
                                HTML + CSS + JS<br />
                                React, Node
                            </p>
                        </div>
                    </div>
                    <div className='skills-section mobile-break'>
                        <h2>\ Design</h2>
                        <div>
                            <p>
                                Web design in several own projects<br />
                                creative person<br />
                                self taught out of passion
                            </p>
                        </div>
                    </div>
                </div>
                <Link id="button-projects" to="projects">Look at Projects</Link>
            </div>
        </div>
    )
}
