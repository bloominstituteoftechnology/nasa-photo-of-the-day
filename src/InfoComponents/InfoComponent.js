import React from 'react';
import styled from 'styled-components';

const InfoDiv = styled.div`
    color: white;
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-text: center;
`;

const InfoComponent = (props) => {
    //console.log(props);
    return (
        <InfoSection>
            {/*refactor as h2's*/}
            <InfoDiv className = 'title'>{props.title}</InfoDiv>
            <InfoDiv className = 'date'>{props.date}</InfoDiv>
            <InfoDiv className = 'explanation'>{props.explanation}</InfoDiv>
        </InfoSection>
    );
}

export default InfoComponent;