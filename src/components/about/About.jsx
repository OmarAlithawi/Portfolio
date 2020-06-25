import React from 'react'
import './style.css'
import {Element} from 'react-scroll'
import '../animation/keyframes.css'
import {ThinkingSvgAboutSection } from '../svg/SVG'


export default function About() {
    return (
        <Element className ="about" name ="About" >
            <h1 className ="aboutMe">About Me</h1>
             <ThinkingSvgAboutSection />   
             <p className ="aboutDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quia odit est illo. Labore incidunt, ad odit aliquid, asperiores, tenetur omnis aliquam repudiandae quis eaque ipsa a? Provident dolorum soluta tenetur saepe sequi fugit impedit a aperiam ad ut repellat, magnam esse dicta sit qui facilis. Inventore ipsa impedit mollitia?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quia odit est illo. Labore incidunt, ad odit aliquid, asperiores, tenetur omnis aliquam repudiandae quis eaque ipsa a? Provident dolorum soluta tenetur saepe sequi fugit impedit a aperiam ad ut repellat, magnam esse dicta sit qui facilis. Inventore ipsa impedit mollitia?</p>
             <h1 className ="sectionNumbers">0.2</h1>
        </Element>
    )
}
