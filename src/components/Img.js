import React from 'react';
import styled from "styled-components";

const Styledimgdiv = styled.div`

    background-color: ${pr => pr.theme.primaryColor};

    img{
        border: ${pr => pr.theme.secondaryColor} 1px solid;
        padding: 1%;
        border-radius: 20px;
        margin: 2% 0;
        background-color: ${pr => pr.theme.secondaryColor};
    }    


`

function Img(props){
    return(
        <Styledimgdiv>
        <img src={props.img} alt={props.title} className="mainImg"/>
        </Styledimgdiv>
    )
};

export default Img

