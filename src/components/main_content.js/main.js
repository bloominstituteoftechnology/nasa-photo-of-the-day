import React from 'react';
import axios from 'axios';
import './main.css';


function Main(){
return (
  <div className='mainBodyContainer'>
  <h2 className='day'>Photo Of The Day</h2>
  <label htmlFor="start"> Date: </label>
  <input type="date" id='start' name='photo-start'
  min='1900-01-01' max='2020-03-03'
  />
  <div className='imgOfDay'>
    <h1>Img display here </h1>
  </div>
  </div>
)
}

export default Main;