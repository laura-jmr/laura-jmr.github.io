import React, { useState, useEffect } from 'react'
import "./SocialBar.css"

export default function SocialBar() {
    const [isFixed, setFixed] = useState(false);
    const [isShowEmail, setIsShowEmail] = useState(false);

    const showEmail = () => {
        setIsShowEmail(true);
        var emailCopy = document.getElementById("copy-email");
        emailCopy.style.display = 'inline-block'
        setTimeout(() => {
            setIsShowEmail(false);
        }, 5000);
    };

    const copyEmail = () => {
        var email = document.getElementById("email");
        var emailCopy = document.getElementById("copy-email");

        navigator.clipboard.writeText(email.innerText);
        emailCopy.style.display = 'none'
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            if (offset > window.innerHeight - 105) {
                console.log("fixed")
                setFixed(true);
            } else {
                setFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`socialbar-container ${isFixed ? 'fixed' : ''}`}>
            <ul id="socialbar-list">
                <li>
                    <a href='https://github.com/laura-jmr' target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/la_loraaa/' target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/laura-jürgensmeier-b3245a26a/' target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                </li>
                <li id='socialbar-list--item-email'>
                    <p onClick={showEmail} id="socialbar-email"><i className="fa fa-envelope-open-o fa-2x" aria-hidden="true"></i></p>
                    <span className={`${isShowEmail ? 'show-email' : 'hide-email'}`}><span id="email">laura.juergensmeier@gmail.com</span> <span onClick={copyEmail}>  <i className="fa fa-copy" aria-hidden="true" id="copy-email"></i></span></span>
                </li>
            </ul>
        </div>
    )
}
