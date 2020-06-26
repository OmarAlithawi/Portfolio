import React, { useEffect } from "react";
import { Link } from "react-scroll";
import ListItem from "@material-ui/core/ListItem";

export default function SidebarItems(props) {
  console.log(props.section);
  return (
    <Link
      activeClass="active"
      spy={true}
      hashSpy={true}
      to={props.section}
      smooth={true}
      duration={1000}
    >
      <ListItem button key={props.section}>
        {props.item(props.section, props.index)}
      </ListItem>
    </Link>
  );
}
