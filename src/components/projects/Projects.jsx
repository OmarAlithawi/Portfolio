import React from 'react'
import './style.css'
import {Element} from 'react-scroll'
import { useTranslation } from 'react-i18next';

export default function Projects(props) {
    const { t  } = useTranslation();
    return (
        <Element className ="projects" name = {t("projects")}>
            <h1 className ="sectionNumbers">0.3</h1>
            <h1 className ="sectionNumbersBackground">0.3</h1>
        </Element>
    )
}
