import React from 'react'
import "./Footer.css"
import ContactForm from '../components/ContactForm'

export default function Footer() {
    return (
        <div id="page-footer-container">
           <div className='table'>
                <div className='f-table-column-1'>
                <p>Personal Portfolio Webpage of Laura Jürgensmeier<br/><br/>coded and designed 2023</p>
                </div>
                <div className='f-table-column-2'>
                    <ContactForm/>
                </div>
                <div className='f-table-column-1'>
                <p>
                    Impressum<br/>
                    Datenschutzerklärung<br/>
                    
                </p>
                </div>
           </div>
        </div>
    )
}
