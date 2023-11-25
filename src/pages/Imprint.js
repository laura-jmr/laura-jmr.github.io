import React from 'react'
import "./Imprint.css"
import { useTranslation } from 'react-i18next';

export default function Imprint() {
    const { t } = useTranslation();
    return (
        <div id="page-imprint-container">
            <h1>Imprint</h1>
            <div>
                <p>Laura Jürgensmeier</p>
                <h3>Postanschrift:</h3>
                <p>Durlacher Str. 21B<br/>10715 Berlin</p>
                <h3>Kontakt:</h3>
                <p>laura.juergensmeier@gmail.com<br/>+491784715171</p>
            </div>
        </div>
    )
}
