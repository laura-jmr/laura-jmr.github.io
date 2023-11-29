import React from 'react'
import "./PrivacyPolicy.css";
import NewMenu from "../screens/NewMenu"
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
    const { t } = useTranslation();
    return (
        <div id="page-privacy-polity-container">
            <NewMenu isSubpage={true} />
            <div id="privacy-polity-container">
                <h1>{t('footer_info4')}</h1>

                <h2>{t('privacy_polity_h2_1')}</h2>
                <p>{t('privacy_polity_h2_1_p_1')}</p>
                <p>{t('privacy_polity_h2_1_p_2')}</p>
                <p>{t('privacy_polity_h2_1_p_3')}</p>

                <h2>{t('privacy_polity_h2_2')}</h2>
                <ul>
                    <li>{t('privacy_polity_h2_ul_1')}</li>
                    <li>{t('privacy_polity_h2_ul_2')}</li>
                    <li>{t('privacy_polity_h2_ul_3')}</li>
                    <li>{t('privacy_polity_h2_ul_4')}</li>
                    <li>{t('privacy_polity_h2_ul_5')}</li>
                    <li>{t('privacy_polity_h2_ul_6')}</li>
                    <li>{t('privacy_polity_h2_ul_7')}</li>
                    <li>{t('privacy_polity_h2_ul_8')}</li>
                    <li>{t('privacy_polity_h2_ul_9')}</li>
                    <li>{t('privacy_polity_h2_ul_10')}</li>
                    <li>{t('privacy_polity_h2_ul_11')}</li>
                    <li>{t('privacy_polity_h2_ul_12')}</li>
                    <li>{t('privacy_polity_h2_ul_13')}</li>
                    <li>{t('privacy_polity_h2_ul_14')}</li>
                </ul>

                <h2>{t('privacy_polity_h2_3')}</h2>
                <p>Laura Jürgensmeier<br />Durlacher Str. 21B<br />10715 Berlin</p>
                <p>{t('privacy_polity_h2_3_p_1')}</p>

                <h2>{t('privacy_polity_h2_4')}</h2>
                <p>{t('privacy_polity_h2_4_p_1')}</p>
                <h3>{t('privacy_polity_h2_4_h3_1')}</h3>
                <ul>
                    <li>{t('privacy_polity_h2_4_ul_1')}</li>
                    <li>{t('privacy_polity_h2_4_ul_2')}</li>
                    <li>{t('privacy_polity_h2_4_ul_3')}</li>
                    <li>{t('privacy_polity_h2_4_ul_4')}</li>
                    <li>{t('privacy_polity_h2_4_ul_5')}</li>
                </ul>

                <h3>{t('privacy_polity_h2_4_h3_2')}</h3>
                <ul>
                    <li>{t('privacy_polity_h2_4_ul_6')}</li>
                    <li>{t('privacy_polity_h2_4_ul_7')}</li>
                </ul>

                <h3>{t('privacy_polity_h2_4_h3_3')}</h3>
                <ul>
                    <li>{t('privacy_polity_h2_4_ul_8')}</li>
                    <li>{t('privacy_polity_h2_4_ul_9')}</li>
                    <li>{t('privacy_polity_h2_4_ul_10')}</li>
                    <li>{t('privacy_polity_h2_4_ul_11')}</li>
                    <li>{t('privacy_polity_h2_4_ul_12')}</li>
                    <li>{t('privacy_polity_h2_4_ul_13')}</li>
                    <li>{t('privacy_polity_h2_4_ul_14')}</li>
                    <li>{t('privacy_polity_h2_4_ul_15')}</li>
                    <li>{t('privacy_polity_h2_4_ul_16')}</li>
                    <li>{t('privacy_polity_h2_4_ul_17')}</li>
                    <li>{t('privacy_polity_h2_4_ul_18')}</li>
                    <li>{t('privacy_polity_h2_4_ul_19')}</li>
                    <li>{t('privacy_polity_h2_4_ul_20')}</li>
                </ul>

                <h2>{t('privacy_polity_h2_5')}</h2>
                <p>{t('privacy_polity_h2_5_p_1')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_5_ul_1')}</li>
                    <li>{t('privacy_polity_h2_5_ul_2')}</li>
                </ul>
                <p>{t('privacy_polity_h2_5_p_2')}</p>
                <p>{t('privacy_polity_h2_5_p_3')}</p>

                <h2>{t('privacy_polity_h2_6')}</h2>
                <p>{t('privacy_polity_h2_6_p_1')}</p>

                <h2>{t('privacy_polity_h2_7')}</h2>
                <p>{t('privacy_polity_h2_7_p_1')}</p>

                <h2>{t('privacy_polity_h2_8')}</h2>
                <p>{t('privacy_polity_h2_8_p_1_1')}</p>
                <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de" target="_blank">https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de.</a>
                <p>{t('privacy_polity_h2_8_p_1_2')}</p>
                <a href="https://www.dataprivacyframework.gov/" target="_blank">https://www.dataprivacyframework.gov/</a>
                <p>{t('privacy_polity_h2_8_p_1_3')}</p>

                <h2>{t('privacy_polity_h2_9')}</h2>
                <p>{t('privacy_polity_h2_9_p_1')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_9_ul_1')}</li>
                    <li>{t('privacy_polity_h2_9_ul_2')}</li>
                    <li>{t('privacy_polity_h2_9_ul_3')}</li>
                    <li>{t('privacy_polity_h2_9_ul_4')}</li>
                    <li>{t('privacy_polity_h2_9_ul_5')}</li>
                    <li>{t('privacy_polity_h2_9_ul_6')}</li>
                    <li>{t('privacy_polity_h2_9_ul_7')}</li>
                </ul>

                <h2>{t('privacy_polity_h2_10')}</h2>
                <p>{t('privacy_polity_h2_10_p_1')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_10_ul_1')}</li>
                    <li>{t('privacy_polity_h2_10_ul_2')}</li>
                    <li>{t('privacy_polity_h2_10_ul_3')}</li>
                    <li>{t('privacy_polity_h2_10_ul_4')}</li>
                </ul>
                <p>{t('privacy_polity_h2_10_p_2')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_10_ul_5')}</li>
                    <li>{t('privacy_polity_h2_10_ul_6')}</li>
                    <li>{t('privacy_polity_h2_10_ul_7_1')}<a href="https://www.squarespace.com" target="_blank">https://www.squarespace.com</a>{t('privacy_polity_h2_10_ul_7_2')}<a href="https://www.squarespace.com/privacy" target="_blank">https://www.squarespace.com/privacy</a>{t('privacy_polity_h2_10_ul_7_3')}<a href="https://www.squarespace.com/dpa" target="_blank">https://www.squarespace.com/dpa</a>{t('privacy_polity_h2_10_ul_7_4')}(<a href="https://www.squarespace.com/dpa" target="_blank">https://www.squarespace.com/dpa</a>).</li>
                </ul>

                <h2>{t('privacy_polity_h2_11')}</h2>
                <p>{t('privacy_polity_h2_11_p_1')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_11_ul_1')}</li>
                    <li>{t('privacy_polity_h2_11_ul_2')}</li>
                    <li>{t('privacy_polity_h2_11_ul_3')}</li>
                    <li>{t('privacy_polity_h2_11_ul_4')}</li>
                </ul>
                <p>{t('privacy_polity_h2_11_p_2')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_11_ul_5_1')}<a href="https://automattic.com" target="_blank">https://automattic.com</a>{t('privacy_polity_h2_11_ul_5_2')}<a href="https://automattic.com/privacy" target="_blank">https://automattic.com/privacy</a>{t('privacy_polity_h2_11_ul_5_3')}</li>
                </ul>

                <h2>{t('privacy_polity_h2_12')}</h2>
                <p>{t('privacy_polity_h2_12_p_1')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_12_ul_1')}</li>
                    <li>{t('privacy_polity_h2_12_ul_2')}</li>
                    <li>{t('privacy_polity_h2_12_ul_3')}</li>
                    <li>{t('privacy_polity_h2_12_ul_4')}</li>
                </ul>
                <p>{t('privacy_polity_h2_12_p_2')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_12_ul_5')}</li>
                </ul>

                <h2>{t('privacy_polity_h2_13')}</h2>
                <p>{t('privacy_polity_h2_13_p_1')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_13_ul_1')}</li>
                    <li>{t('privacy_polity_h2_13_ul_2')}</li>
                    <li>{t('privacy_polity_h2_13_ul_3')}</li>
                    <li>{t('privacy_polity_h2_13_ul_4')}</li>
                    <li>{t('privacy_polity_h2_13_ul_5_1')}<br /><br />{t('privacy_polity_h2_13_ul_5_2')}<a href="https://www.youronlinechoices.eu" target="_blank">https://www.youronlinechoices.eu</a>.  <br />{t('privacy_polity_h2_13_ul_5_3')}<a href="https://www.youradchoices.ca/choices" target="_blank">https://www.youradchoices.ca/choices</a>. <br />{t('privacy_polity_h2_13_ul_5_4')}<a href="https://www.aboutads.info/choices" target="_blank">https://www.aboutads.info/choices</a>. <br />{t('privacy_polity_h2_13_ul_5_5')}<a href="https://optout.aboutads.info" target="_blank">https://optout.aboutads.info</a>.</li>
                </ul>

                <h2>{t('privacy_polity_h2_14')}</h2>
                <p>{t('privacy_polity_h2_14_p_1')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_14_ul_1')}</li>
                    <li>{t('privacy_polity_h2_14_ul_2')}</li>
                    <li>{t('privacy_polity_h2_14_ul_3')}</li>
                    <li>{t('privacy_polity_h2_14_ul_4')}</li>
                </ul>
                <p>{t('privacy_polity_h2_14_p_2')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_14_ul_5_1')}<a href="https://www.instagram.com" target="_blank">https://www.instagram.com</a>{t('privacy_polity_h2_14_ul_5_2')}<a href="https://instagram.com/about/legal/privacy" target="_blank">https://instagram.com/about/legal/privacy</a>.</li>
                    <li>{t('privacy_polity_h2_14_ul_6_1')}<a href="https://www.linkedin.com" target="_blank">https://www.linkedin.com</a>{t('privacy_polity_h2_14_ul_6_2')}<a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">https://www.linkedin.com/legal/privacy-policy</a>{t('privacy_polity_h2_14_ul_6_3')}<a href="https://legal.linkedin.com/dpa" target="_blank">https://legal.linkedin.com/dpa</a>{t('privacy_polity_h2_14_ul_6_4')}(<a href="https://legal.linkedin.com/dpa" target="_blank">https://legal.linkedin.com/dpa</a>){t('privacy_polity_h2_14_ul_6_5')}<a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.</li>
                </ul>

                <h2>{t('privacy_polity_h2_15')}</h2>
                <p>{t('privacy_polity_h2_15_p_1')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_15_ul_1')}</li>
                    <li>{t('privacy_polity_h2_15_ul_2')}</li>
                    <li>{t('privacy_polity_h2_15_ul_3')}</li>
                    <li>{t('privacy_polity_h2_15_ul_4')}</li>
                </ul>
                <p>{t('privacy_polity_h2_15_p_2')}</p>
                <ul>
                    <li>{t('privacy_polity_h2_15_ul_5_1')}<a href="https://fonts.google.com/" target="_blank">https://fonts.google.com/</a>{t('privacy_polity_h2_15_ul_5_2')}<a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>{t('privacy_polity_h2_15_ul_5_3')}<a href="https://developers.google.com/fonts/faq/privacy?hl=de" target="_blank">https://developers.google.com/fonts/faq/privacy?hl=de</a>.</li>
                </ul>
            </div>
        </div>
    )
}
