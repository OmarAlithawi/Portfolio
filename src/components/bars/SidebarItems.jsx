import React,{useEffect} from 'react'
import {Link} from 'react-scroll';
import ListItem from "@material-ui/core/ListItem";

export default function SidebarItems(props) {

  

    return (
         <Link activeClass="active" spy = {true} hashSpy={true} to={props.text}  smooth={true} duration={1000}>
            <ListItem button key={props.text}>
              {props.item(props.text, props.index)}
            </ListItem>
        </Link>
        
    )
}


