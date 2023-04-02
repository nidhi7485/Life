import React from 'react'
import heart from '../assets/heart.png'
const About = () => {
  return (
    <>
      <div className='headings'>
        <h4>Our Programs</h4>
        <div className='underline'></div>
      </div>
      <section className='about'>
        <div className='main-container'>
          <div className='img-container'>
            <img src={heart} alt='image' />
          </div>
          <div className='about-text'>
            <span className='special-text'>
              Collectively, we want to help change how Millennials, and younger
              generations, view and treat Seniors.
            </span>
            <p>
              our plan to reach the people, or contact to them for their
              happiness. we connect to people and serve the place to get gatherd
              together and share the and share the experiences , happiness,love
              etc. To ignite a movement of Millennials to see and celebrate
              seniors by engaging them in an exciting and relevant way.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
