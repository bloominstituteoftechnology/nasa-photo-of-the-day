import React, { useEffect, useState } from "react";
import styled from 'styled-components';




const APODTitle = styled.h2`
font-size: 2rem;
font-weight: 200;
border-bottom: 0.2rem solid #FC3D21;
padding-bottom: 1rem;

`;

const Title = (props) => {
                return (
                <div>
                    <APODTitle>{props.title}</APODTitle>
                    <p>{props.date}</p>
                </div>
                
                )

}

export default Title 