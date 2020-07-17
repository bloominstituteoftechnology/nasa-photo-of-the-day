import React from "react"
import styled from 'styled-components'

const StyledPhoto = styled.div`
    background-color: white;
    width: 70%;
    margin: 0 auto;
    border-radius: 10px;

    .img-container {
        width: 70%;
        border-radius: 10px;
        padding: 2%;
        border: 5px solid #C83D39;
        margin: 20px auto;  
    }
  .apod-img{
    border-radius: 10px;
    margin: 2%;
  }
`

const Photo = props => {

    const { photo } = props

    return (
    <StyledPhoto>
        <h2>{photo.title}</h2>
        <div>
        <div className = 'img-container'>
        <img
            alt = {photo.title}
            src = {photo.url}
            className = "apod-img"
        />
        </div>
        
        </div>
        <p>{photo.explanation}</p>
    </StyledPhoto>
    
    )
}


export default Photo