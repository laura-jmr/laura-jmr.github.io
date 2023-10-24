import React from 'react'
import "./Menu.css"

export default function Menu() {
  return (
    <div id="menu-container">
        <ul>
            <li id="menu-list-item-tl">
                <a href=''>Projekte & Skills</a>
            </li>
            <li id="menu-list-item-tr">
                <a href=''>Socials</a>
            </li>
            <li id="menu-list-item-bl">
                <a href=''>Resume</a>
            </li>
            <li id="menu-list-item-br">
                <a href=''>Skills</a>
            </li>
        </ul>
    </div>
  )
}
