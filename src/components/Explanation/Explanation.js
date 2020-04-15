import React from 'react';
import styled from 'styled-components';
import { ExplaWrapper, ExplaText } from './ExplanationStyles';

const Expla = props => {
    return (
        <ExplaWrapper>
            <ExplaText>{props.expla}</ExplaText>
        </ExplaWrapper>
    );
};

export default Expla;