import React from "react"
import styled from 'styled-components'

const DivWrapper = styled.div`
    font-size: 1.5rem;
    color: rebeccapurple;
`;

const SpaceImg = styled.img`
    width: 15rem;
    height: 20rem;
`;



const Picture = props => {
    const {data} = props;

    return (
        <DivWrapper>
            <p>{data.title}</p>
            <SpaceImg
            alt='Mars'
            className='picture' 
            src={data.url}
            />
        </DivWrapper>
    )
}

export default Picture
