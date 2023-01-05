import React from 'react'

import styled from 'styled-components'

const NasaAppWrap = styled.div`
  background-color:lightgrey;
  .Date{
    display:flex;
    padding-left:10px;
  }
  img{
    height:70vh;
    width:70%;
    border:5px solid white;
    &:hover{
      border:4px solid black;
    }
  }
  p{
    color:black;
    padding:10px;
    padding-top:0px;
    font-family:sans-serif;
    margin:0px;
    margin-top:5px;
    font-size:17.5px;
  }

  .copyright{
    display:flex;
  }
`
const NasaPhoto = (props) => {
    return(
      <NasaAppWrap className='Nasa-image-wrapper'>
        <h1 className='Main-title'>{props.Data.title}</h1>
        <h3 className='Date'>{props.Data.date}</h3>
        <img src = {props.Data.hdurl} alt = 'An image os a galaxy that is far far away'/>
        <p className='Detailed-report'>{props.Data.explanation}</p>
        <h4 className='copyright'>Credit: {props.Data.copyright}</h4>
      </NasaAppWrap>
    )
}

export default NasaPhoto