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
  <h1 className="aboutMe">{t("about")}</h1>
        <p>{t("about_description")}</p>
      </div>
      <AboutMe className="leftSide" />

      <h1 className="sectionNumbers">0.2</h1>
      <h1 className="sectionNumbersBackground">0.2</h1>
    </Element>
  );

}
