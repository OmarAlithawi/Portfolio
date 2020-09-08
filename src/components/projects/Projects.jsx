import React from "react";
import "./style.css";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import SingleProject from "./SingleProject";
import Carousel from "react-material-ui-carousel";
import { Slide } from "@material-ui/core";
import boardProject from "../../assets/img/boardProject.svg";
import movieProject from "../../assets/img/movieProject.svg";
import capstoneProject from "../../assets/img/capstoneProject.svg";

export default function Projects(props) {
  const { t } = useTranslation();

  const items = [
    {
      name: t("board_project_title"),
      description: t("board_project_description"),
      img: boardProject,
      technologies: ["React", "Firebase", "Material ui"],
      live_demo_link: "https://omaralithawi.github.io/Boards-Project/",
    },
    {
      name: t("movie_project_title"),
      description: t("movie_project_description"),
      img: movieProject,

      technologies: ["HTML", "CSS", "Javascript"],
      live_demo_link: "https://omaralithawi.github.io/MovieApp/#",
    },
    {
      name: t("capstone_project_title"),
      description: t("capstone_project_description"),
      img: capstoneProject,

      technologies: ["ReactJS", "Firebase", "Wordpress"],
      live_demo_link: "https://istanbul-capstone-ecommerce.netlify.app/",
    },
  ];

  return (
    <Element className="projects" name={t("projects")}>
      <h1 className="heading-1">Projects</h1>
      <div id ="carouselHolder">
      <Carousel interval={6000} animation="slide"  >
        {items.map((item ,index) => (
          
          <SingleProject key = {index} item={item} />
          
        ))}
      </Carousel>
      </div>

      <h1 className="sectionNumbers">0.3</h1>
      <h1 className="sectionNumbersBackground">0.3</h1>
    </Element>
  );
}

/**
 * {
        name: "Capstone Project",
        description: "Hello World!",
        img: capstoneProject,
        technologies:[
            "React",
            "Firebase",
            "Material ui"
        ],
        live_demo_link:"https://omaralithawi.github.io/MovieApp/#",
    }
 */
