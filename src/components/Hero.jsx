import React, { Fragment } from 'react'
import "./Hero.scss"
import Slider from './Slider/Slider'
import { useState } from 'react'
import About from './About'
const Hero = ({hero}) => {
 
  const [showAnotherPhoto, setShowAnotherPhoto] = useState(false);

  const togglePhoto = () => {
    setShowAnotherPhoto(!showAnotherPhoto);
  };

  return (
    <Fragment>

   <div className='div__hero__container'> 

        <section className='section__card'>
            <a className="section__card__a" href='#Contact'>{hero.name}</a>
        </section>

        <section className='section__card'>
           <h2 className="section__card__h2">{hero.presentation}</h2>
           <h2 className="section__card__h1">{hero.city}</h2>
        </section>
           
           
           
           
  
       <div className="section__card__div">
         {showAnotherPhoto ? (<img  onClick={togglePhoto} src={hero.image} alt={hero.name} className='section__card__div__img' ></img>) : (<img onClick={togglePhoto} src={hero.image2} alt={hero.name} className='section__card__div__img'></img>)}
       </div>
   </div>
  
    </Fragment>
  )
}

export default Hero
