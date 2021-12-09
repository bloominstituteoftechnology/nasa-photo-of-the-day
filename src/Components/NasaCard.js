import React from "react";
import styled from 'styled-components'

const StyledContent = styled.div`
color: dodgerblue;
img-width: 60%;
`

const NasaCard = (props) => {
    return (
        <StyledContent className='container'>
            <h1>Daily Nasa Photo</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <img src={props.data.url} alt='Nasa photo of the day' />
            <footer>This is my footer section</footer>
        </StyledContent>
    )
}

export default NasaCard;