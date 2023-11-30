import React from 'react'
import "./NewSkills.css"
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function NewSkills() {
    const { t } = useTranslation();

    return (
        <div id="page-skills-container" >
            <div id="skills-inner-container">
                <h1>{t('skills_header')}</h1>
                <div id="skills-section-container">
                    <div className='skills-section'>
                        <h2>\ Backend</h2>
                        <div>
                            <p>
                                {t('skills_backend_description1')}<br />
                                {t('skills_backend_description2')}<br />
                                Python // SQL // MongoDB
                            </p>
                        </div>
                    </div>
                    <div className='skills-section middle'>
                        <h2>\ Frontend</h2>
                        <div>
                            <p>
                                {t('skills_frontend_description1')}<br />
                                HTML + CSS + JS<br />
                                React, Node
                            </p>
                        </div>
                    </div>
                    <div className='skills-section mobile-break'>
                        <h2>\ Design</h2>
                        <div>
                            <p>
                                {t('skills_design_description1')}<br />
                                {t('skills_design_description2')}<br />
                                {t('skills_design_description3')}
                            </p>
                        </div>
                    </div>
                </div>
                <Link id="button-projects" to="projects">{t('skills_button_projekte')}</Link>
            </div>
        </div>
    )
}
