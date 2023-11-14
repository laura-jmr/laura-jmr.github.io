import React from 'react'
import "./Landing.css"
import Menu from '../components/Menu'
import SocialBar from '../components/SocialBar'
import Cursor from '../components/Cursor'
import Goo from 'gooey-react'

export default function Landing() {
  return (
    <div id="page-landing-container">

      <div id="page-landing-title-container-table">
        <div className="page-landing-title-container-column-1">
          <div className="page-landing-title-container-row-1"></div>
          <div className="page-landing-title-container-row-2">
            <h1 id="page-landing-title-name">
              <span className='page-landing-title-name-letter first'>J</span>
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
            </h1>
          </div>
          <div className="page-landing-title-container-row-1"></div>
        </div>
        <div className="page-landing-title-container-column-2">
          <div className="page-landing-title-container-row-1">
            <h1 id="page-landing-title-surname">
              <span className="page-landing-title-surname-left">L</span>
              <span className='page-landing-title-surname-left'>a</span>
              <span className='page-landing-title-surname-center'>u</span>
              <span className='page-landing-title-surname-right'>r</span>
              <span className="page-landing-title-surname-right">a</span>
            </h1>
          </div>
          <div className="page-landing-title-container-row-2">
            <img id="page-landing-image" src="/images/IMG_3733.jpeg" alt="shigeki wakabayashi japan at night" />
          </div>
          <div className="page-landing-title-container-row-1">
          </div>
        </div>
        <div className="page-landing-title-container-column-1">
          <div className="page-landing-title-container-row-1"></div>
          <div className="page-landing-title-container-row-2"></div>
          <div className="page-landing-title-container-row-1">
            <p id='page-landing-title-container-description'>
              Applied Computer Science Student @ HTW Berlin<br />
              Presently Computer Science Master in Berlin<br />
              Future full stack dev // web designer
            </p>
          </div>
        </div>
      </div>
      <SocialBar />
      <Menu />
    </div>
  )
}
