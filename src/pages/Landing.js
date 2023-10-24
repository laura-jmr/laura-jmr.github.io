import React from 'react'
import "./Landing.css"
import Menu from '../components/Menu'
import SocialBar from '../components/SocialBar'
import LiquidButton from '../components/LiquidButton'

export default function Landing() {
  return (
    <div id="page-container-landing">
      <img id="page-landing-image" src="/images/shigeki-wakabayashi-6nuz52vsbWc-unsplash.jpg" alt="shigeki wakabayashi japan at night"/>
      <Menu/>
      <SocialBar/>
      <LiquidButton/>
    </div>
  )
}
