import React from "react";
import "./style.css";
import { Element } from "react-scroll";
import "../animation/keyframes.css";
import { ThinkingSvgAboutSection, Education, AboutMe } from "../svg/SVG";
import { useTranslation } from "react-i18next";

export default function About(props) {
  const { t } = useTranslation();

  return (
    <Element className="about" name={t("about")}>
      <div className="rightSide">
        <h1 className="aboutMe">About Me</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <AboutMe className="leftSide" />

      <h1 className="sectionNumbers">0.2</h1>
      <h1 className="sectionNumbersBackground">0.2</h1>
    </Element>
  );
}
