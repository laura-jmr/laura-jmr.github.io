import React from 'react'
import Landing from './Landing'
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <Landing />
            <Skills />
            <Resume />
            <Contact />
            <Footer />
        </>
    )
}
