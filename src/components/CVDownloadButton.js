import React from 'react';
import "./CVDownloadButton.css";
import { useTranslation } from 'react-i18next';

export default function CVDownloadButton() {
    const { t } = useTranslation();

    const downloadCV = () => {
        const cvUrl = '/cv.pdf';

        const link = document.createElement('a');
        link.href = cvUrl;
        link.setAttribute('download', 'resume_laura_juergensmeier_2023.pdf');

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };

    return (
        <button id="cv-download-button" onClick={downloadCV}>
            {t('cv_download_button')}
        </button>
    )
}
