import React from "react";
import styled from 'styled-components'

const Wrapper = styled.section`
    border: dashed #2196f3;
    margin 30px;
`;


const WrapperChildTwo = styled.section`
    font-size: 15px;
    margin: 0px 100px 0px 100px;
    `;


const NasaCard = props => {
    console.log(props, "props")
    return (
        <div className="nasa-card" key="">
            <img className="nasa-image" alt="random nasa pic" src={props.url} />
            <Wrapper>
            <h1>{props.title}</h1>
            <WrapperChildTwo>
            <p>{props.explanation}</p>
            </WrapperChildTwo>
            </Wrapper>
        </div>
    )
}
export default NasaCard;