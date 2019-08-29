import React from "react"

import styled from "styled-components";


const Information = ( props) => {
    return (
<div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>

</div>

    )
}

export default Information;