import React from 'react'
import "./Skills.css"

export default function Skills() {
    return (
        <div id="page-skills-container">
            <div id='table'>
                <div className='table-column-1'>
                    <div className='table-row-1'>
                    <h1>Proficiencies</h1>
                    </div>
                    <div className='table-row-2'>
                        <h2>\ Backend</h2>
                        <p>
                            Software Web Developement<br/>
                            Components and Databases<br/>
                            Python // SQL // MongoDB
                        </p>
                    </div>
                    <div className='table-row-1'></div>
                </div>
                <div className='table-column-2'>
                    <div className='table-row-1'>
                    </div>
                    <div className='table-row-2'>
                        <h2>\ Frontend</h2>
                        <p>
                            Visual Web Developement<br/>
                            HTML + CSS + JS<br/>
                            React, Node
                        </p>
                    </div>
                    <div className='table-row-1'></div>
                </div>
                <div className='table-column-1'>
                    <div className='table-row-1'></div>
                    <div className='table-row-2'>
                        <h2>\ Design</h2>
                        <p>
                            Web design in several own projects<br/>
                            creative person<br/>
                            self taught out of passion
                        </p>
                    </div>
                    <div className='table-row-1'>
                        <a>Look at Projects</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
