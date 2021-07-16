import React from 'react';
import styled from  'styled-components';
export default function Content(props) {
    const {explanation, title} = props;
    const Contents = styled.div`
    //FILL ME IN
    `;
    return (
        <Contents>
            <div>
            <h3>{title}</h3>
            </div>
        </Contents>
    )
}