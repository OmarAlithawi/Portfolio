import React from "react";
import { Element } from "react-scroll";
import "./style.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import react from "../../assets/img/react.svg";
import htmlCssJs from "../../assets/img/htmlCssJs.svg";
import database from "../../assets/img/database.svg";
import SASS from "../../assets/img/SASS.svg";
import ResumeInfo from "./ResumeInfo";
import Skills from "./Skills";
import Paper from "@material-ui/core/Paper";
import resumeFile from "../../assets/resumeFile.pdf";

import useStyles from "./style";

export default function Resume(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();

  const skillsSvgs = [react, htmlCssJs, database, SASS];
  const skillsInfo = ["React", "HTML, CSS & JS", "Firebase", "SASS"];
  return (
    <Element className="resume" name={t("resume")}>
      <h1 className="heading-1">Resume</h1>
      <Paper elevation={3} className="resumeInfo">
        <div className="informationDropDownList">
          <ResumeInfo />
        </div>
        <div className="skills">
          {skillsSvgs.map((svg, index) => (
            <Skills
              key={index}
              svg={svg}
              index={index}
              skillsInfo={skillsInfo}
            />
          ))}
        </div>
        <a href={resumeFile} download>
          Download Resume
        </a>
      </Paper>

      <h1 className="sectionNumbers">0.4</h1>
      <h1 className="sectionNumbersBackground">0.4</h1>
    </Element>
  );
}

