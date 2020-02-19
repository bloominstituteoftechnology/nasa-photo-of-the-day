import React from 'react';
import logo from './img/nasaLogo.jpg';
import '../header.css';


function Header() {
  return(
    <div className='headerContainer'>
    <div className='header'>
      <h1>NASA</h1>
      <p>APOD</p>
      </div>
      <>
      <img className='logoHeader' src={logo} alt=""/>
      </>
      </div>
  )
}

export default Header;