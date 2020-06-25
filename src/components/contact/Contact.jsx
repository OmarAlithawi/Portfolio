import React from 'react'
import './style.css'
import {Element} from 'react-scroll'
import { useTranslation } from 'react-i18next';


export default function Contact(props) {
    const { t  } = useTranslation();
    return (
        <Element className ="contact" name = {t("contact")}>
            <h1 className ="sectionNumbers">0.5</h1>
            <h1 className ="sectionNumbersBackground">0.5</h1>
        </Element>
    )
}
