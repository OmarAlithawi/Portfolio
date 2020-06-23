import React from 'react'
import {Link} from 'react-scroll';
import ListItem from "@material-ui/core/ListItem";

export default function SidebarItems(props) {
    console.log(props.text);
    return (
        
         <Link to={props.text} smooth={true} duration={1000}>
            <ListItem button key={props.text}>
              {props.item(props.text, props.index)}
            </ListItem>
        </Link>
        
    )
}
