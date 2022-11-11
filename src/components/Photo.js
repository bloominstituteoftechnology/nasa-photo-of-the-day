import React from "react";
import styled from 'styled-components'


const StyledWrapper = styled.div`
    background-color: ${pr => pr.theme.wildcard};
    margin: 2%;
    align-items: center;
    border: groove 0.2rem #a9a9ab;

    h2 {
        font-style: bold;
    }

    h3 {
        font-style: italic;
    }

    img {
        max-width: 40%;
        // object-fit: cover;
        border: ridge 0.2rem;
    }

    .content {
        margin: 3%;
        display: flex;
        flex-direction: row;
    }

    .content p {
        padding: 2%;
        width: 50%;
        margin: 5%;
        border: thick double;
        background-color: ${pr=> pr.theme.primaryColor};
    }
`;


const Photo = (props) => {
    return(
        <StyledWrapper>
            <h2>{props.photo.title}</h2>
            <h3>{props.photo.copyright}</h3>
            <div className="content">
                <img src={props.photo.hdurl} alt={props.photo.title}/>
                <p>{props.photo.explanation}</p>
            </div>            
        </StyledWrapper>
    )
}

export default Photo