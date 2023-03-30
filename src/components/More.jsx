import React, { Fragment } from 'react'
import "./More.scss"
const More = (props) => {
   const {languages, volunteer, abroad} = props;

  return (
    <Fragment>
    <h1 className="section__title__languages">LANGUAGES SKILLS:</h1>

    <section className='section__skills'>

  {languages.map((lang, index)=>{
    return <div key= {index} className="section__skills__div__languages">
      <h2 className='div__languages__title'>{lang.language}</h2>
      <h2 className='div__languages__title'>{lang.wrlevel}</h2>
      <h2 className='div__languages__title'>{lang.splevel}</h2>
          </div>
  })}
  </section>
  <section className="section__abroad">
   {abroad.map((country,index)=>{
     return <div key={index} className="">
      <h3 className="section__abroad__title"> {country.country}</h3>
      <h3 className="section__abroad__title"> {country.date}</h3>
      <h3 className="section__abroad__title"> {country.scholarship}</h3>
     </div>
   })}
 </section>
   <h1>VOLUNTEER EXPERIENCES AND PRACTICES</h1>
{volunteer.map((works, index)=>{
  return <section key= {index} className="section__skills__div__volunteer">
  
  <h3 className='section__skills__div__volunteer__title'>{works.name}</h3>
  <h3 className='section__skills__div__volunteer__title'>{works.where}</h3>
  <h3 className='section__skills__div__volunteer__title'>{works.description}</h3>
  
  </section>
})}
    </Fragment>
  )
}

export default More
