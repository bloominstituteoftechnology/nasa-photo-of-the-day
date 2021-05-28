import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
color: ${(props) => props.theme.primaryColor};
&:hover {
    color: ${(props) => props.theme.dangerColor};
}
    button {
        background-color: #f5f5dc
    }`

const Content = (props) => {
    const {info, title, date} = props;

    return (
       
        <container>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{info}</p>
        </container>
        
    )
}

export default Content;