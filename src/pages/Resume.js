import React from 'react'
import "./Resume.css"

export default function Resume() {
    return (
        <div id="page-resume-container">
            <div id="resume-timeline-container-upper">
                <div id="resume-timeline-container">
                    <div id="resume-timeline-container-column-1">
                        <ul id="resume-timeline-date-list">
                            <li><h3>2019</h3></li>
                            <li><h3>2020</h3></li>
                            <li><h3>2021</h3></li>
                            <li><h3>2022</h3></li>
                            <li><h3>2023</h3></li>
                        </ul>
                    </div>
                    <div id="resume-timeline-container-column-2">
                        <div id="resume-timeline-line"></div>
                        <ul id="resume-timeline-entry-list">
                            <li><div className='resume-timeline-entry-item-block'/><p className='resume-timeline-entry-item'>High School Degree<br />@ Hannah-Arendt-Gymnasium Lengerich<br/>Bachlor of Science/Computer Science // Mathematics<br/>@ University of Bielefeld</p></li>
                            <li><div className='resume-timeline-entry-item-block'/><p className='resume-timeline-entry-item'>Bachlor of Science/Applied Computer Science<br />@ HTW Berlin</p></li>
                            <li><div className='resume-timeline-entry-item-block'/><p className='resume-timeline-entry-item'>Bachlor of Science/Applied Computer Science<br />@ HTW Berlin<br/>Mentoring Job as Java Programmer<br/>@ HTW Berlin</p></li>
                            <li><div className='resume-timeline-entry-item-block'/><p className='resume-timeline-entry-item'>Bachlor of Science/Applied Computer Science<br />@ HTW Berlin</p></li>
                            <li><div className='resume-timeline-entry-item-block'/><p className='resume-timeline-entry-item'>Bachlor of Science/Applied Computer Science<br />@ HTW Berlin</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
