import React from 'react'
import './contact.css'
import Chat from './../../images/chat-contact.png'
import {FaWhatsapp, FaMobile} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='left-contact'>
          <h3>Help & Support </h3>
          <p>Ask for Pricing or Any Query</p>
          <h2> Contact Us</h2>

          <div className='social-icons'>
            <FaWhatsapp size={60} className='icons whatsapp' />
            <FaMobile size={60} className='icons' />

    </div>
        </div>

        <div className='middle-contact'>
                            
          <form className="contact-form">
          <label for="e-mail">Enter Your Name</label>
          <input type="e-mail" className='boxing' placeholder="Type Your E-mail " required></input>

            <label for="e-mail">Enter Your Email-Id</label>
            <input type="e-mail" className='boxing' placeholder="Type Your E-mail " required></input>

            <label for="text">Enter Your Message</label>
            <input type="text" className='message' placeholder="Type Your Message " required></input>

            <div className="user-button">
              <button className="button register-button">Submit </button>
            </div>
          </form>
        </div>
        <div className='right-contact'>
          <img src={Chat} alt='Contact-us' />
          
        </div>
      
      </div>
    
    </>
  )
}

export default Contact