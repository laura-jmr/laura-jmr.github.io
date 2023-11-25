import React from 'react'
import "./Footer.css"
import ContactForm from '../components/ContactForm'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div id="page-footer-container">
            <div className='table'>
                <div className='f-table-column-1'>
                    <p>{t('footer_info1')}<br />
                        &copy; Laura Jürgensmeier
                        <br />{t('footer_info2')}</p>
                </div>
                <div className='f-table-column-2'>
                    <ContactForm />
                </div>
                <div className='f-table-column-1'>
                    <Link to="imprint">{t('footer_info3')}</Link>
                </div>
            </div>
        </div>
    )
}
