import React, {useEffect} from 'react'
import './style.css'
import hero from '../../assets/img/hero.png'
import  instagram  from '../../assets/img/instagram.svg'
import  linkedin  from '../../assets/img/linkedin.svg'
import  github  from '../../assets/img/github.svg'
import SectionsDots from './SectionsDots'
import {Element} from 'react-scroll'
import * as Scroll from 'react-scroll'


export default function Header() {

  const scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  }, [])

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

          <h1 className ='myName'>Omar Alithawi</h1>
          <h3 className ='prefix'>Hi, I'm</h3>
          <p className ="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iste sit, mollitia illo dolore laboriosam aliquam consequuntur error omnis sed!
            </p>  

        </Element>
    )
}
