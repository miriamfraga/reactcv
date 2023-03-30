import React from 'react'
import "./Experience.scss"
const Experience = ({experience}) => {
      
      return ( <> 
      <h1> CUSTOMER SUPPORT JOBS</h1>
    <section className="section__container__experience">
      {experience.tech.map((works, index)=>{
        return <div key= {index} className="section__container__experience__div">
        {/* <img src={works.icon} alt={works.name} className='section__container__card__icon' ></img> */}
        <h2 className='section__container__experience__div__title__name'>{works.name} </h2>
        <h5 className='section__container__experience__div__title'> {works.date}</h5>
        <h3 className='section__container__experience__div__title'>{works.where}</h3>
        <h4  id="hide">{works.description}</h4>
        </div>
      })}
    </section>
    <h1> PSYCHOLOGY AND EQUALITY JOBS</h1>

    <section className="section__container__experience">
    {experience.psycho.map((works, index)=>{
     return <div key= {index} className="section__container__experience__div">
     {/* <img src={works.icon} alt={works.name} className='section__container__card__icon' ></img> */}
     <h2 className='section__container__experience__div__title__name'>{works.name} </h2>
     <h5 className='section__container__experience__div__title'> {works.date}</h5>
     <h3 className='section__container__experience__div__title'>{works.where}</h3>
     <h4  id="hide" >{works.description}</h4>
     </div>
   })}
    </section>
    </>
  )
}

export default Experience
