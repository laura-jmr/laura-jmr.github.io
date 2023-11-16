import React from 'react'
import Landing from './Landing'
import NewLanding from './NewLanding'
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import NewSkills from './NewSkills';

export default function Home() {
    return (
        <>
            {/* <Landing /> */}
            <NewLanding/>
            {/* <Skills /> */}
            <NewSkills />
            <Resume />
            <Contact />
            <Footer />
        </>
    )
}
