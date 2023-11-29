import React from 'react'
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
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <ScrollToTop />
                <NewMenu isSubpage={false}/>
                {/* <Landing /> */}
                <NewLanding />
                {/* <Skills /> */}
                <NewSkills />
                {/* <Resume /> */}
                <NewResume />
                <Contact />
                <Footer />
            </I18nextProvider>
        </>
    )
}
