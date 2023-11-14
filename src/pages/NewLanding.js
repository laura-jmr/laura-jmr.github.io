import React from 'react'
import "./NewLanding.css"
import Menu from '../components/Menu'
import SocialBar from '../components/SocialBar'
import Cursor from '../components/Cursor'
import Goo from 'gooey-react'

export default function NewLanding() {
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
                    Applied Computer Science Student @ HTW Berlin<br />
                    Presently Computer Science Master in Berlin<br />
                    Future full stack dev // web designer
                </p>
            </div>
            <SocialBar />
            <Menu />
        </div>
    )
}
