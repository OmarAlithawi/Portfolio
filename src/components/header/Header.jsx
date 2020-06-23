import React from 'react'
import './style.css'
import hero from '../../img/hero.png'
import  instagram  from '../../img/instagram.svg'
import  linkedin  from '../../img/linkedin.svg'
import  github  from '../../img/github.svg'

export default function Header() {
    return (
        <div className = "header" id ="Home">
         
            <div className ="sectionsDots">
                <div className ="dot active"></div>
                <div className ="dot"></div>
                <div className ="dot"></div>
                <div className ="dot"></div>
            </div>
           
            <div className = "socialMedia">
                <img src ={github} alt ="social meida" className = "socialMediaIcons "/>
                <img src ={linkedin} alt ="social meida" className = "socialMediaIcons"/>
                <img src ={instagram} alt ="social meida" className = "socialMediaIcons"/>
            </div>

          <div className = "headerImage"> 
            <img src ={hero} alt ="hero" />
          </div>  
            

        </div>
    )
}
