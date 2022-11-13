import React from 'react';
import Logo from '././../../images/ymph-logo.png';
import './footer.css';
import FooterProps from './FooterProps/FooterProps';

const Footer = (props) => {
  return (
<>
      <div className='publishing-book'>
        
        <div className='left-publishing-book'>
          <h3>Contact Us For Publishing Your Book</h3>
        </div>

        <div className='right-publishing-book'>
           <button className='button publishing-button'>Contact us</button>
        </div>
        

      </div>

    <div className="footer">
      <div className="footer-horizontal">
        <div className="footer-horizontal-1">
          <img src={Logo} alt="YMPH"></img>
        </div>

        <div className="footer-horizontal-2">
          <p className="footer-text-horizontal-2">
            Young Minds Publication provides Self-publishing services,
            organising events and contests for new Writers. We had published 20+
            Books and successfully organized 50+ events in our two year of
            Journey.
          </p>
        </div>
      </div>

      <div className="footer-vertical">
        <FooterProps
          title={'For Writers'}
          titleLinks1={'Verify Certificates'}
          titleLinks2={'Get Published'}
          titleLinks3={'Offers'}
          titleLinks4={'Events'}
          titleLinks5={'Contests'}
        />

        <FooterProps
          title={'Company'}
          titleLinks1={'Home'}
          titleLinks2={'About'}
          titleLinks3={'Contact us'}
          titleLinks4={'Press'}
          titleLinks5={'Careers'}
        />

        <FooterProps
          title={'Legal'}
          titleLinks1={'Terms of Use'}
          titleLinks2={'Privacy Policy'}
          titleLinks3={'Disclaimer'}
          titleLinks4={'Report Us'}
              />
              
       
        <div className='connect-ions'>
        
        </div>
                 
      </div>
      <hr />
      <div>
        <p className="footer-copyright">
          © 2022 Young Minds Publishing House. All Rights Reserved.
              </p>
      </div>
      </div>
      </>
  );
};

export default Footer;
