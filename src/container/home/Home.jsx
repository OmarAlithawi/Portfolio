import React, { useEffect } from "react";
import Sidebar from "../../components/bars/Sidebar";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Resume from "../../components/resume/Resume";
import useStyles from "./style";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Header />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Typography paragraph></Typography>
      </main>
    </div>
  );
}
