import React from "react";
import {Spinner} from 'reactstrap';
import styled from 'styled-components';

const Loader  = props =>{

    const LoaderComponent = styled.div `
        color: #fff;
        font-size:3rem;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height:100px;
    `;

    return (
        <LoaderComponent>
            <h2>{props.message}</h2>
            <Spinner style={{ width: props.size, height: props.size }} />
        </LoaderComponent>
    );

};

export default Loader;