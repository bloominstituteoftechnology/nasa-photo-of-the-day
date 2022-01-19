import React from "react";
import styled from 'styled-components'

const StyledContent = styled.div`
color: purple;
background-color: black;

h1 {
    font-size: 4em;
}

p {
    color: gold;
    font-size: 2em;
};

img {
    max-width: 100%;
    border: 3px solid;

}

img:hover{
    border-color: yellow;
}

footer {
    font-size: 2em;
    color: white;
}

`

const NasaCard = (props) => {
    return (
        <StyledContent className='container'>
            <h1>Daily Nasa Photo</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <img src={props.data.url} alt='Nasa photo of the day' />
            <footer data-hover= 'And youre never coming round'>Every now and then I get a little bit lonely</footer>
        </StyledContent>
    )
}

export default NasaCard;