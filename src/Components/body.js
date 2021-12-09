import React from "react";
import Styled from "styled-components";
import '../App.css';

const StyledBody = Styled.div `
    img{
        max-width: 100%;
        height: 50vh;
    }
`


const Body = (props) => {
    const{nasaAPI} = props;
    return (
        <StyledBody>
            <h1>NASA Photo of the Day!</h1>
                <div>
                <p className="date">Date: {nasaAPI.date}</p>
                </div>
                <div>
                <p className="explanation">{nasaAPI.explanation}</p>
                </div>
                <img src={nasaAPI.hdurl} alt="item of the day"/>
                <p>Copyright: {nasaAPI.copyright}</p>
        </StyledBody>
    )
}

export default Body;