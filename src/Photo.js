import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const StyledPhoto = styled.div`
 width: 50%;
 display: flex;
 justify-content; space-evenly;
 flex-wrap: wrap;
 padding: 6px;
 background-color: ${pr => pr.theme.primaryColor};
 color: ${pr => pr.theme.white};
 font-size: 2rem;
`


function Photo() {
const [nasa,setNasa] = useState([])
useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setNasa(res.data)
      })
      .catch(err => {
        debugger
      })
    }, [])
return (
    <StyledPhoto>
        <h2>{nasa.title}</h2>
        {
        nasa &&
         <>
            <img src = {nasa.hdurl} />
            <p>{nasa.explanation}</p>
            <p>Date: {nasa.date}</p>
        </>
        }
    </StyledPhoto>
    )
}