import React, {useEffect} from 'react'
import './style.css'
import hero from '../../img/hero.png'
import  instagram  from '../../img/instagram.svg'
import  linkedin  from '../../img/linkedin.svg'
import  github  from '../../img/github.svg'
import SectionsDots from './SectionsDots'
import {Element} from 'react-scroll'



export default function Header() {

    
    return (
        <Element className = "header" name ="Home">
            <div className ="sectionsDots" >
              { ['Home' , 'About' , 'Portfolio' , 'Contact'].map((name)=> {
                  return <SectionsDots sectionName = {name} />
               })}
             </div>   
           
            <div className = "socialMedia">
                <a href ="https://github.com/OmarAlithawi" target ="_blank" ><img src ={github} alt ="social meida" className = "socialMediaIcons "/></a>
                <a href ="https://www.linkedin.com/in/omar-alithawi-1646701a4/" target ="_blank" ><img src ={linkedin} alt ="social meida" className = "socialMediaIcons"/></a>
                <a href ="" ><img src ={instagram} alt ="social meida" className = "socialMediaIcons"/></a>
            </div>
            <h1 className ="sectionNumbers">0.1</h1>

          <div className = "headerImage"> 
            <img src ={hero} alt ="hero" />
          </div>  
            

        </Element>
    )
}
