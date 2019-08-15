import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    color: green;
`
const Lettering = (props) => {
    return (
        <div className="lettering">
            <Title>{props.lettering}</Title>
        </div>
    )
}

export default Lettering;