import React, { useRef } from 'react'
import "./NewResume.css"
import { useTranslation } from 'react-i18next';
import CVDownloadButton from "../components/CVDownloadButton"

export default function NewResume() {
    const { t } = useTranslation();
    const resumeRef = useRef(null);

    return (
        <div id="page-resume-container" ref={resumeRef}>
            <div id='resume-inner-container'>
                <h2>Resume</h2>

                <div className='resume-entry-container'>
                    <p id="resume-currently-tag">{t('resume_currently')} @</p>
                    <h3>{t('resume_entry_header1')}</h3>
                    <p className="resume-entry-description">{t('resume_entry_description1')}</p>
                    <p className="resume-entry-year">/20 - /24</p>
                </div>
                <div className='resume-entry-container'>
                    <h3>{t('resume_entry_header2')}</h3>
                    <p className="resume-entry-description">{t('resume_entry_description2')}</p>
                    <p className="resume-entry-year">/23</p>
                </div>
                <div className='resume-entry-container'>
                    <h3>{t('resume_entry_header3')}</h3>
                    <p className="resume-entry-description">{t('resume_entry_description3')}</p>
                    <p className="resume-entry-year">/21 - /22</p>
                </div>
                <div className='resume-entry-container'>
                    <h3>{t('resume_entry_header4')}</h3>
                    <p className="resume-entry-description">{t('resume_entry_description4')}</p>
                    <p className="resume-entry-year">/19 - /20</p>
                </div>
                <div className='resume-entry-container'>
                    <h3>{t('resume_entry_header5')}</h3>
                    <p className="resume-entry-description">{t('resume_entry_description5')}</p>
                    <p className="resume-entry-year">/19 - /20</p>
                </div>
                <CVDownloadButton />
            </div>
        </div>
    )
}
