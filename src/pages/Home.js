import React, { useRef } from 'react'
import Landing from './Landing'
import NewLanding from '../screens/NewLanding'
import Skills from './Skills';
import Resume from './Resume';
import NewMenu from '../screens/NewMenu'
import Contact from './Contact';
import Footer from './Footer';
import NewSkills from './NewSkills';
import NewResume from './NewResume';
import { I18nextProvider } from 'react-i18next';
import i18n from "../components/i18n"
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
    const resumeRef = useRef(null);
    const skillsRef = useRef(null);

    const scrollToRef = (refName) => {
        console.log("ref")
        const ref = {
            resumeRef,
            skillsRef
        }[refName];
        console.log(refName)
        console.log(ref.current)

        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            console.log("scrolling")
        }
    };
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <ScrollToTop />
                <NewMenu isSubpage={false} scrollToRef={scrollToRef}/>
                {/* <Landing /> */}
                <NewLanding />
                {/* <Skills /> */}
                <NewSkills ref={skillsRef}/>
                {/* <Resume /> */}
                <NewResume ref={resumeRef}/>
                <Contact />
                <Footer />
            </I18nextProvider>
        </>
    )
}
