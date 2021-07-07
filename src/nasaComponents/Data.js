import React from "react"
import styled from 'styled-components'

const Text = styled.div`
    color: rebeccapurple;
`;

const Pad = styled.p`
    display: flex;
    justify-content: center;
    margin: 0% 12.5% 0% 12.5%;
    padding-bottom: 2rem;
`;

const Data = props => {
    const {data} = props;
    return (
        <Text>
            <p>{data.copyright} {data.date}</p>
            <Pad>{data.explanation}</Pad> 
        </Text>
    );
}


export default Data
