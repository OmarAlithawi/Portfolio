import React from "react";
import "./style.css";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import SingleProject from './SingleProject'
import { items } from './ProjectsData'
import Carousel from 'react-material-ui-carousel'
import { Slide } from "@material-ui/core";


export default function Projects(props) {
  const { t } = useTranslation();

 

  return (
    <Element className="projects" name={t("projects")}>
      <h1 className ="heading-1">Projects</h1>

      <Carousel   interval = {6000}  animation = "slide" className ="">
        {items.map(item => <SingleProject item={item} /> )}
      </Carousel>

      <h1 className="sectionNumbers">0.3</h1>
      <h1 className="sectionNumbersBackground">0.3</h1>
    </Element>
  );
}
