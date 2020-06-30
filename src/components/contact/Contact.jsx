import React from "react";
import "./style.css";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import Paper from "@material-ui/core/Paper";
import contact from "../../assets/img/contact.svg";

export default function Contact(props) {
  const { t } = useTranslation();
  return (
    <Element className="contact" name={t("contact")}>
      <Paper className="form">
        <ContactForm t={t} />
      </Paper>
      <div className="contact-img">
        <img src={contact} alt="conatct" />
      </div>
      <h1 className="sectionNumbers">0.5</h1>
      <h1 className="sectionNumbersBackground">0.5</h1>
    </Element>
  );
}
