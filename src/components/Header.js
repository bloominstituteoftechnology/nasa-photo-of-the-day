import React from "react"

import styled from "styled-components"
function Header(props) {
    let {copyright, date, title} = props;
    return (
    <HeaderS>
        <div>
            <h1>{title}</h1>
            <h2>{copyright}</h2>
            <h3>{date}</h3>
        </div>
    </HeaderS>
    )
}

const HeaderS = styled.div`
    text-align: center;
`

export default Header;