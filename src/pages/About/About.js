import React from 'react'
import './about.css'
import Founder from './../../images/Founder.jpeg'
const About = () => {
  return (
    <>
      <div className='about'>
        
        
      
        <div className='about-header-left'>
          <img src={Founder} alt='founder-of-ymph'></img>
          <div className='about-container'>
          <div className='founder-box'>
          <h2 className='founder-box-h2'>Er. Sachin Pratap Singh</h2>
          <p className='founder-box-p'>Founder and CEO</p>
          </div>
          </div>
        </div>
      
        <div className='left-hero-section-content right-about'>
        <h3 className='our-work-about'>Our Work and Team</h3>
          <h2 className='our-work-about'>About Us</h2>
          <p className='about-para'>Young Minds Publishing House is founded by Er. Sachin Pratap Singh and Cdt. Ishani Smriti Shriti Sinha.<br/>
<br/>
          We notice that many publishers ask for heavy amount for publishing a Book. Huge amount is not possible for Everyone. Talent should not be ruined due to money.
          <br/><br/>
          So, we build a team and help young talents in India to landing their Creativity on Page.</p>
        </div>
        
      </div>
    </>
  )
}

export default About