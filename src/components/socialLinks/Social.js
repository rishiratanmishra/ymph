import React from 'react'
import './social.css'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp} from "react-icons/fa";



const Social = () => {
  return (
      <div className='social-icons'>
      <FaFacebook size={60} className='icons'/>
      <FaInstagram size={60} className='icons'/>
      <FaYoutube size={60} className='icons' /> 
      <FaTwitter size={60} className='icons' /> 
      <FaWhatsapp size={60} className='icons' />

      
      
      </div>
  )
}

export default Social