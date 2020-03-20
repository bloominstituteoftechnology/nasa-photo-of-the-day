import React from "react";
import styled from 'styled-components';


const StylePara = styled.p`
width: 50%;
color: white;
background-color: rgba(255, 153, 138, 0.1);
text-align: center;
display: flex;
padding: 2%;
margin-left: 23%;
border-radius: 20px;
`;

const PhotoCard = (props) => {
    return (
        
        //can probably move some of this styling over to css files instead of inline.
        <div className="photo-list" style={{  
            backgroundImage: "url(" + props.url + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            paddingTop: '10%'
          }}>
            <StylePara>{props.explanation}</StylePara>
            <p style={{
                color: 'white'
            }}>Date Taken: {props.date}</p>
        </div>
    )
}

export default PhotoCard;