import React from 'react';
import './homeprops.css';
const HomeProps = ({ Tagline, Headline, CompanyQuote, ButtonText,Image,ImageAlttext }) => {
  return (
    <>
      <div className="hero-section">
        <div className="left-hero-section">
          <div className="left-hero-section-content">
            <h4>{Tagline}</h4>
            <h2> {Headline}</h2>
            <p>{CompanyQuote} </p>
          </div>
          <div className="hero-section-buttons">
            <button className="button"> {ButtonText} </button>
          </div>
        </div>
        <div className="right-hero-section">
                  <div className="slider">
                      <img className='hero-event-image' src={Image} alt={ ImageAlttext } /> </div>
        </div>
      </div>
    </>
  );
};

export default HomeProps;
