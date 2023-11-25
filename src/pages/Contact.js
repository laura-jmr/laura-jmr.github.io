import React from 'react'
import "./Contact.css"
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <div id="contact-page-container">
            <div id='contact-container'>
                <p className='up-down-animation'><i className="fa fa-angle-up fa-4x" aria-hidden="true"></i></p>
                <h2>{t('contact_question1')}<span className='underline'>{t('contact_question2')}</span>?</h2>
            </div>
        </div>
    )
}
