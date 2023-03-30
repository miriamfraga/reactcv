import React, {Fragment} from 'react'
import "./About.scss"
import { images } from '../img/images'

const About = ({hero}) => {
  return (
    <Fragment>
    <h2 className='div__container__title'>SOME INTERESTING INFORMATION ABOUT ME</h2>

     <div className="div__container"> 
    

 <section className="div__container__section__about"> 
    {hero.aboutMe.map((i, index)=>{
        return <div className="div__container__section__about__div" key= {index} id="About">
                  <h2 className="div__container__section__about__div__title"> {i.info}</h2>
               </div>
      
       })}
       </section>
       <div className="div__img"> 
       <section className="div__img__section" id="Contact">
          <a href={`mailto:"${hero.email}"`} className='div__img__section__title'><img className="img__mail" src={hero.emailIcon}></img></a>
          <h2 className='div__img__section__title'>Phone: {hero.phone}</h2>
          <h2 className='div__img__section__title'>GitHub: {hero.gitHub}</h2>
       </section> 
       </div>
</div>
  

    </Fragment>
  )
}

export default About
