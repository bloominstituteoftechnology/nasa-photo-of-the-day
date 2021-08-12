import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../src/constants/index'
import "./ApodDisplay.css"
import styled from 'styled-components'

const StyledApodDiv = styled.div `
  display:flex;
    max-height: 60vh;
    margin: 2% 5%;
    border: 1px solid #4f4f4f;
    padding: 2% 2%;

    .description-container{
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items:center;
      flex-direction: column; 
      overflow-y: scroll;    
      padding: 2% 2%;
  }
  
  .image-container{
    max-width:55%;
    margin-left: 5%;
    display: flex;
    justify-content: center;
  }
  h2{
      font-size: 2rem;
      padding: 2% 0;
      text-align: center;
  }
  
  img{
    object-fit:contain;
    margin: 0 auto;
    
  }

  .description{
    text-indent: 30px; 
  }

`


export default function Apod() {
   
    const [now, setNow] = useState({})

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
            setNow(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
   
    return (
    

       <StyledApodDiv>
           <div className='description-container'>
               <h3>{now.date}</h3>
               <h2>{now.title}</h2>
               <p className="description">{now.explanation}</p>
               <p>Copyright: {now.copyright}</p>
            </div>
            <div className='image-container'>
                <img src={now.url}></img>
            </div>    
       </StyledApodDiv>
   ) 
}

export {StyledApodDiv}