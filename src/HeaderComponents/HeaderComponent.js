import React from 'react';
import styled from 'styled-components';

const WhiteH1 = styled.h1`
    color: white;
`;

const HeaderComponent = () => {
    return (
        <section className = 'header'>
            <div className = 'heading'>
                <WhiteH1>NASA Photo Of The Day</WhiteH1>
            </div>
        </section>
    );
}

export default HeaderComponent;