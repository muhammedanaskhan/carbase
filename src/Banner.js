import React from 'react'
import './Banner.css'


function Banner() {
  return (
    <header
      className='banner'
      style={{
        backgroundImage: <img src='./banner_images/1.jpg'></img>, 
        backgroundPosition: `center center`
      }}
    >

            <div className='container'>
                <div className='wrapper'>
                    
                        {/* <img src='' className='img'></img> */}
                        {/* <img src='https://wallpaperaccess.com/full/11207.jpg' className='img'></img>
                        <img src='https://wallpaperaccess.com/full/11207.jpg' className='img'></img>
                        <img src='https://wallpaperaccess.com/full/11207.jpg' className='img'></img>
                        <img src='https://wallpaperaccess.com/full/11207.jpg' className='img'></img>
                        <img src='https://wallpaperaccess.com/full/11207.jpg' className='img'></img> */}
                     
                      </div> 
                
            </div>

      <div className="banner-fade-bottom" />
    </header>
    
  )
}

export default Banner