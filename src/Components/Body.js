import React from "react";
import '../App.css';
import styled from "styled-components";


const StyledBody = styled.div`
    p{
        font-size: 1.5 rem;
    }
    img {
        width: 100%;
        height: 15vh;
    }
    .date p{
        display: flex;
        flex-direction: left;
        flex-wrap: wrap;
    }
`

const Body = (props) => {
    const{nasaAPI} = props;
    return (
        <div>
            <p className="date"> Date: {nasaAPI.date}</p>
            <p> Explanation: {nasaAPI.explanation}</p>
            <img src={nasaAPI.hdurl} alt='Item of the day' />

            <p>Copyright: {nasaAPI.copyright}</p>
        </div>
    )
}

export default Body;