import React from 'react';
import styled from "styled-components";

const Styledimgdiv = styled.div`
background-color: ${pr => pr.theme.primaryColor};
img{
    border: black 1px solid;
    padding: 1%;
    border-radius: 20px;
background-color: ${pr => pr.theme.primaryColor};
}    


`

function Img(props){
    return(
        <div>
        <Styledimgdiv>
        <img src={props.img} alt={props.title} className="mainImg"/>
        </Styledimgdiv>
        </div>
    )

};

export default Img

