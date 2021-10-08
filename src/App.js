
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import styled from 'styled-components';
import Img from './img';
import "./App.css";


const StyledDetails  = styled.div`

background-color: white;}

}
button {
background:none;
color:#ffa260;
border:2px solid;
padding:1em 2em;
font-size:1em;

}
`

function App() {
  const [dataNasa, setDataNasa] = useState([])
  let x=0;
   useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setDataNasa(res.data);
        console.log(res.data);
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
    < StyledDetails className="App">
      
    
        
      
       {dataNasa && <Img img={dataNasa.url}  dat={dataNasa}/>} 
     
    </StyledDetails>
  );
}

export default App;
