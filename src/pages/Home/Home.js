import React from 'react'
import Social from '../../components/socialLinks/Social'
import ImgEvent from '../../images/ymph-hero-6.jpeg'
import './home.css'
import HomeProps from './HomeProps/HomeProps'
const Home = (props) => {
  return (
    <>
      <HomeProps
        Tagline={'Your Thoughts our Platform'}
        Headline={'Publish Your Book Today'}
        CompanyQuote={'Young Minds Publication is Regd. Under MSME UDYAM-UP-21-0000803'}
        ButtonText={'Call Now'}
        Image={ImgEvent }
        ImageAlttext={'YMPH-EVENT'}
      />

      <div className='hero-social'>
            <Social className='hero-social-icons'/>
      </div>
    

    </>
  )
}

export default Home