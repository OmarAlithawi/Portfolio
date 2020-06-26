import React, { useEffect } from "react";
import "./style.css";
import hero from "../../assets/img/hero.png";
import instagram from "../../assets/img/instagram.svg";
import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
import SectionsDots from "./SectionsDots";
import { Element } from "react-scroll";
import * as Scroll from "react-scroll";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../animation/keyframes.css";
import HeaderDescription from "./HeaderDescription";

import i18next from "i18next";
import { withNamespaces } from "react-i18next";

export default function Header(props) {

  const [checked, setChecked] = React.useState(false);
  const [langs, setLangs] = React.useState("English");
  const [componentIdForLanguage, setComponentIdForLanguage] = React.useState("Home");

  function setLanguage(lang) {
    i18next.changeLanguage(lang);
  }

  const setSwitchState = () => {
    setChecked((prev) => !prev);

    if (checked) {
      setLangs("English");
      setComponentIdForLanguage("Home");
    } else {
      setLangs("العربية");
      setComponentIdForLanguage("الصفحة الرئيسية");
    }
  };

  const scroll = Scroll.animateScroll;
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <Element className="header" name={componentIdForLanguage}>
      <FormGroup className="nav">
        <FormControlLabel
          control={<Switch checked={checked} onChange={setSwitchState} />}
          label={langs}
        />
      </FormGroup>
      {checked ? setLanguage("ar") : setLanguage("en")}

      <div className="sectionsDots">
        {["Home", "About", "Projects", "Resume", "Contact"].map(
          (name, index) => {
            return <SectionsDots key={index} sectionName={name} />;
          }
        )}
      </div>

      <div className="socialMedia">
        <a href="https://github.com/OmarAlithawi" target="_blank">
          <img src={github} alt="social meida" className="socialMediaIcons " />
        </a>
        <a
          href="https://www.linkedin.com/in/omar-alithawi-1646701a4/"
          target="_blank"
        >
          <img src={linkedin} alt="social meida" className="socialMediaIcons" />
        </a>
        <a href="">
          <img
            src={instagram}
            alt="social meida"
            className="socialMediaIcons"
          />
        </a>
      </div>

      <div className="headerImage">
        <img src={hero} alt="hero" />
      </div>

      <HeaderDescription />

      <h1 className="sectionNumbers">0.1</h1>
      <h1 className="sectionNumbersBackground">0.1</h1>
    </Element>
  );
}
