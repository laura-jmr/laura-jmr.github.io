import React, { useState, useEffect } from 'react'
import "./NewSocialBar.css"

export default function NewSocialBar({ isSubPage }) {
    const [isFixed, setFixed] = useState(isSubPage);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (!isSubPage) {
                if (offset > window.innerHeight - 130) {
                    console.log("fixed")
                    setFixed(true);
                } else {
                    setFixed(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`socialbar-container`}>
            <ul className={`socialbar-list ${isFixed ? 'fixed' : ''}`}>
                <li>
                    <a href='https://github.com/laura-jmr' target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/la_loraaa/' target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/laura-jürgensmeier-b3245a26a/' target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
    )
}
