import React from 'react'
import {Element} from 'react-scroll'
import './style.css'
import { useTranslation } from 'react-i18next';



export default function Resume(props) {
    const { t  } = useTranslation();
    return (
        <Element className ="resume" name = {t("resume")}>
            <h1 className ="sectionNumbers">0.4</h1>
            <h1 className ="sectionNumbersBackground">0.4</h1>
        </Element>
    )
}
