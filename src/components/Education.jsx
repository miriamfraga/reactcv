import React from 'react'
import "./Education.scss"
import Slider from './Slider/Slider'

const Education = ({slider, education}) => {
  return ( <>  
    <section className="section__container">
     
      {education.map((titles, index)=>{
        return <div className="section__container__card" key= {index}>
        <img src={titles.icon} alt={titles.name} className="section__container__card__icon"></img>
          <ul className='section__container__card__info'> 
             <li className='section__container__card__info__li'>{titles.name}</li>
             <li className='section__container__card__info__li'>{titles.date}</li>
             <li className='section__container__card__info__li'>{titles.where}</li>
          </ul>
        </div>
      })}
     
    </section>

    <section className='section__slider'>
    <h1>Tools</h1>
        <Slider slider={slider} />
    </section>
    
    </>
  )
}

export default Education
