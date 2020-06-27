import React from "react";
import { Element } from "react-scroll";
import "./style.css";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";
import react from "../../assets/img/react.svg"
import htmlCssJs from "../../assets/img/htmlCssJs.svg"
import database from "../../assets/img/database.svg"
import ResumeInfo from './ResumeInfo';
import Skills from './Skills'

import useStyles from './style'

export default function Resume(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();

const skillsSvgs = [react , htmlCssJs , database];
const skillsInfo = ['React' , 'HTML, CSS & JS' , 'Firebase'];
  return (
    <Element className="resume" name={t("resume")}>

      <div className= "informationDropDownList">
        <ResumeInfo />
      </div>

      <div className ="skills">
        {skillsSvgs.map((svg , index) => <Skills key = {index} svg ={svg} index = {index} skillsInfo = {skillsInfo} />)}
      </div>
      
      <h1 className="sectionNumbers">0.4</h1>
      <h1 className="sectionNumbersBackground">0.4</h1>
    </Element>
  );
}

/**
 * <div className ="box1">
        <img src ={react} alt ="tech" />
        <h3>React</h3>
      </div>
      <div className ="box2">
      <h3>HTML ,CSS and Javascript</h3>
        <img src ={htmlCssJs} alt ="tech" />
      </div>
      <div className ="box3">
        <img src ={database} alt ="tech" />
        <h3>Database</h3>
      </div>
 */