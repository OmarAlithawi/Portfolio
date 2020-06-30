import React from 'react'
import {Paper} from '@material-ui/core'
import './style.css'
import '../animation/keyframes.css'
import { useTranslation } from "react-i18next";


export default function SingleProject(props) {
    console.log(props.item.technologies);
    const { t } = useTranslation();

    return (
        
        <Paper elevation={3} className ="card" >
            <div className ="cardContent"> 
            
                <img src={props.item.img} alt="project" />
                <div className ="projectDescription">
                    <h2>{props.item.name}</h2>
                    <h4>{props.item.description}</h4>
                    <ul>
                         {props.item.technologies.map(tech => <li>{tech}</li>)}
                    </ul>
                    <a href ="#">{t("live_demo")}</a>
                </div>
            </div>
        </Paper>
    )
}
