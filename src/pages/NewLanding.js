import React from 'react'
import "./NewLanding.css"
import Menu from '../components/Menu'
import SocialBar from '../components/SocialBar'
import Cursor from '../components/Cursor'
import Goo from 'gooey-react'
import { useTranslation } from 'react-i18next';


export default function NewLanding() {
    const { t } = useTranslation();
    
    return (
        <div id="page-landing-container">
            <div id="page-landing-content-container">
                <div id="page-landing-name">
                    <span className='page-landing-title-name-letter'>J</span>
                    <span className='page-landing-title-name-letter-hide'>ü</span>
                    <span className='page-landing-title-name-letter-hide'>r</span>
                    <span className='page-landing-title-name-letter-hide'>g</span>
                    <span className='page-landing-title-name-letter-hide'>e</span>
                    <span className='page-landing-title-name-letter-hide'>n</span>
                    <span className='page-landing-title-name-letter-hide'>s</span>
                    <span className='page-landing-title-name-letter'>m</span>
                    <span className='page-landing-title-name-letter-hide'>e</span>
                    <span className='page-landing-title-name-letter-hide'>i</span>
                    <span className='page-landing-title-name-letter-hide'>e</span>
                    <span className='page-landing-title-name-letter'>r</span>
                </div>
                <div id='page-landing-content-inner-container'>
                    <div id="page-landing-surname">
                        <span className="page-landing-surname-letter left">L</span>
                        <span className='page-landing-surname-letter left'>a</span>
                        <span className='page-landing-surname-letter center'>u</span>
                        <span className='page-landing-surname-letter right'>r</span>
                        <span className="page-landing-surname-letter right">a</span>
                    </div>
                    <img id="page-landing-image" src="/images/IMG_3733.jpeg" alt="shigeki wakabayashi japan at night" />
                </div>
                <p id='page-landing-description'>
                    {t('landing_about1')}<br />
                    {t('landing_about2')}<br />
                    {t('landing_about3')}
                </p>
            </div>
            <SocialBar />
            <Menu />

        </div>
    )
}
