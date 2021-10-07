
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import { ThemeProvider } from 'styled-components';
import Img from './img';
import "./App.css";


function App() {
  const [dataNasa, setDataNasa] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setDataNasa(res.data);
        console.log('dataNasa');
        console.log(dataNasa);
      }).catch(err => {
        console.error(err);
      })
  }, [])
  
  
  const Nasa =dataNasa => (
    <div className='nasa'>
      {dataNasa.url}
    </div>
  )
  let i=1;
  return (
    <div className="App">
      <p>
         NASA app! Have fun
         <span role="img" aria-label='go!'>🚀</span>!
       
        <button onClick={e => i++}>See pics!</button>
        
      
       {dataNasa && <Img img={dataNasa.url}/>} 
      </p>
    </div>
  );
}

export default App;
