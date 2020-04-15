import React from 'react';
import styled from 'styled-components';
import { ExplaWrapper } from './ExplanationStyles';

const Expla = props => {
    return (
        <ExplaWrapper>
            <p>{props.expla}</p>
        </ExplaWrapper>
    );
};

export default Expla;