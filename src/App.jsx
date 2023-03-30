import React, { useState } from 'react';
import './App.scss';
import { CV } from "./CV/cv";
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import More from './components/More'


const {hero, education, experience, abroad, volunteer, languages, slider} = CV;


function App() {
  const [showEducation, setShowEducation] = useState(true);
  const [showAbout, setShowAbout] = useState(true);
  const [showAnotherPhoto, setShowAnotherPhoto] = useState(false);
  return (
<> 
  <div className="App">
    <Hero hero={hero}/>
    <button className="section__button" onClick={() => setShowEducation(true)} > Knowledge </button>
    <button className="section__button" onClick={() => setShowEducation(false)} > Experience </button>
    
    
    <div>
     {showEducation ? ( <Education education={education} slider={slider}/> ) : ( <Experience experience={experience} />  )}
   </div>
  
   <button className="section__button" onClick={() => setShowAbout(true)} > About Me </button>
   <button className="section__button" onClick={() => setShowAbout(false)} > Languages & Volunteer </button>
   <div>
   {showAbout ? ( <About hero={hero} /> ) : ( <More volunteer={volunteer} languages={languages} abroad={abroad}/>  )}
   </div>
   </div>
   
    </>
  );
}

export default App;
