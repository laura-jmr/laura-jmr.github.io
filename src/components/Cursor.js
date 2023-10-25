import React, { useState, useEffect } from 'react'
import Goo from 'gooey-react'
import "./Cursor.css"


export default function Cursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <Goo intensity="strong">
            <div style={{
                pointerEvents: 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                transform: `translate(${cursorPosition.x - 100}px, ${cursorPosition.y - 50}px)`,
            }}>
                <svg>
                    <circle cx="34%" cy="34%"  r="40" style={{
                        border: "1px solid white",
                        opacity: 0.9,
                    }}/>
                </svg>
            </div>

            <img src="/images/shigeki-wakabayashi-6nuz52vsbWc-unsplash.jpg" alt="shigeki wakabayashi japan at night" className='test' />

        </Goo>
    )
}
