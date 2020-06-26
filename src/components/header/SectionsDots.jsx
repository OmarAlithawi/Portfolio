import React from "react";
import { Link } from "react-scroll";

export default function SectionsDots(props) {
  return (
    <Link
      activeClass="active"
      spy={true}
      to={props.sectionName}
      offset={-0.7}
      smooth={true}
      duration={1000}
    >
      <div className="dot"></div>
    </Link>
  );
}
