import React from "react"
import styled from "styled-components"
function Picture(props) {
    let { imgUrl } = props;
    return (
        <Image src= {imgUrl} />
    )
}

const Image = styled.img`
    display: flex;
    width: 80%;
    margin: 0 auto;
    border: solid darkblue 6px;
`

export default Picture;
