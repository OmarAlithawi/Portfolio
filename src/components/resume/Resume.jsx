import React from "react";
import { Element } from "react-scroll";
import "./style.css";
import { useTranslation } from "react-i18next";
import react from "../../assets/img/react.svg"
import htmlCssJs from "../../assets/img/htmlCssJs.svg"
import database from "../../assets/img/database.svg"

export default function Resume(props) {
  const { t } = useTranslation();
  return (
    <Element className="resume" name={t("resume")}>
      <div className ="box1">
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
      <h1 className="sectionNumbers">0.4</h1>
      <h1 className="sectionNumbersBackground">0.4</h1>
    </Element>
  );
}
