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
        <p>Hello everyone , i'm a Front-End developer from Iraq currently living in Turkey,Istanbul. I'm currently studying computer engineering in Altinbas university. Learning how to code gave me an insight  about how to learn faster , solve problem , team working and a lot more   </p>
      </div>
      <AboutMe className="leftSide" />

      <h1 className="sectionNumbers">0.2</h1>
      <h1 className="sectionNumbersBackground">0.2</h1>
    </Element>
  );
}
