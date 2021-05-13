import React from 'react';
import styled from 'styled-components';

    const Head = styled.div`
        background-color: #545375;
        color: #E4C9B6;
    `;
    const H1style = styled.h1 `
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
    `;
    const Date = styled.h3`
        font-size: 2.3rem;
        text-align: center;
    `;

function Header(props) {
    const {data} = props
    return(
        <Head>
            <H1style>NASA Photo of the Day!</H1style>
            <Date>{data.date}</Date>
        </Head>
    )
}

export default Header