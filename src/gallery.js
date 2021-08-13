import React from 'react';
import styled from 'styled-components';

export default function Icons(props)
{
    const PortfolioElement = styled.div`
        text-align: center;
    `;

    return (
        props.gallery.map(item =>
        {
            return (
                <PortfolioElement key={item.id}>
                    <img src={item.img} alt={item.iconName} />
                    <p>{item.iconName}</p>
                </PortfolioElement>
            );
        })
    );
};