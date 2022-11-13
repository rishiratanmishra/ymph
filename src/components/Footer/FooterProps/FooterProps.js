import React from 'react'
import './footerprops.css'
    const FooterProps = ({ title, titleLinks1,titleLinks2,titleLinks3,titleLinks4,titleLinks5,titleLinks6,titleLinks7,titleLinks8 }) => {
      return (
          <>
      <div className='footer-vertical'>
            <div className='footer-vertical-all'>
              <h3 className='footer-heading'>{ title}</h3>
                    <ul className='footer-vertical-company'>
                  <li className='footer-vertical-company-list'>{titleLinks1 }</li>
                    <li className='footer-vertical-company-list'>{titleLinks2 }</li>
                    <li className='footer-vertical-company-list'>{titleLinks3 }</li>
                <li className='footer-vertical-company-list'>{titleLinks4}</li>
                <li className='footer-vertical-company-list'>{titleLinks5 }</li>
                <li className='footer-vertical-company-list'>{titleLinks6 }</li>
                <li className='footer-vertical-company-list'>{titleLinks7 }</li>
                <li className='footer-vertical-company-list'>{titleLinks8 }</li>
              </ul>

            </div>
            </div>
            </>
  )
}

export default FooterProps