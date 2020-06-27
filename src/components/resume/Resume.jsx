import React from "react";
import { Element } from "react-scroll";
import "./style.css";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import useStyles from './style'
import Skills from './Skills'
import ResumeInfo from './ResumeInfo'
import react from "../../assets/img/react.svg"
import htmlCssJs from "../../assets/img/htmlCssJs.svg"
import database from "../../assets/img/database.svg"

export default function Resume(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();

  const skillsSvgs = [react , htmlCssJs , database];
  const skillsInfo = ['React.js' , 'HTML , CSS & JS' , 'Database'];
 
  return (
    <Element className="resume" name={t("resume")}>
      <div className= "informationDropDownList">
        <ResumeInfo />
      </div>
      <div className ="skills">
       {skillsSvgs.map((svg , index) =>  <Skills key ={index} svg ={svg} index ={index} skillsInfo = {skillsInfo}/>)}
      </div>
      <h1 className="sectionNumbers">0.4</h1>
      <h1 className="sectionNumbersBackground">0.4</h1>
    </Element>
  );
}
