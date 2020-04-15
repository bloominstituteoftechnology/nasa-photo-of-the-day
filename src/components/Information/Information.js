import React from 'react';
import { InfoWrapper, Title } from './InformationStyles';


const Information = props => {
    return (
        <InfoWrapper>
            <Title>
                <p>{props.title}</p>
        
            <p>Date Posted: {props.date}</p>
            
            </Title>
        </InfoWrapper>
    )
}

export default Information;