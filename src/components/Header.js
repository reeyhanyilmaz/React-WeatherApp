import React from 'react'
import image from "../assets/header3.png";

function Header() {
  return (
    <div className='header-component-div'> 
        <img src={image} alt="" />
        <h1>Weather App</h1>
        
    </div>
  )
}

export default Header;