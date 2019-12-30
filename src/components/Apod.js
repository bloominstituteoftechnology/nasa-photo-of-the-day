import React from "react";
import styled from 'styled-components'


const TitLook = styled.div`
    color: grey;
    margin: 0 20px;
`;

const Expo = styled.div`
   max-width: 80%;
   padding: 5px 50px; 
`;

const Apod = (props) =>{
    return(
        <div>

            <TitLook>
                <h1>{props.title}</h1>
            </TitLook>

             <img src={props.imgUrl} alt="pic of from Nasa Photo of the day"/>
            <Expo>
             <p>{props.explanation}</p>
            </Expo>
            
        </div>
    )
}


export default Apod;