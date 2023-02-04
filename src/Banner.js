import React from 'react'
import './Banner.css'


function Banner() {
  return (
    <header
      className='banner'
      style={{
        backgroundPosition: `center center`
      }}>
      <div className="container">
        
        <div className="wrapper">

          <img src={require('./banner_images/1.jpg')} alt="" className="img" />
          <img src={require('./banner_images/2.jpg')} alt="" className="img" />
          <img src={require('./banner_images/3.jpg')} alt="" className="img" />
          <img src={require('./banner_images/4.jpg')} alt="" className="img" />
          <img src={require('./banner_images/5.jpg')} alt="" className="img" />
          <img src={require('./banner_images/6.jpg')} alt="" className="img" />
          <img src={require('./banner_images/7.jpg')} alt="" className="img" />
          <img src={require('./banner_images/9.jpg')} alt="" className="img" />
          <img src={require('./banner_images/8.jpg')} alt="" className="img" />
        </div>

      </div>

    
      {/* <div className="banner-fade-bottom" /> - Needs to be overlap */}
    </header>
    
  )
}

export default Banner