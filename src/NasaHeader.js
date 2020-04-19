import React from "react";
import styled from 'styled-components';

const Wrapper = styled.section`
    background: #2196f3;
    margin: 0px;
    `;

const NasaHeader = props => {
    console.log(props, "props")
    return (
        <div className="nasa-header" key="">
            <Wrapper>
            <h1>NASA Photo of the Day!</h1>
            <h3>{props.title}</h3> 
            <h4>{props.date}</h4>
            </Wrapper>
        </div>
    )
}

export default NasaHeader;