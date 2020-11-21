import React from "react"
import styled from "styled-components"
function Info(props) {
    let {infoText} = props;
    return (
<InfoS>
    <div>
        <h5>{infoText}</h5>
    </div>
</InfoS>
    )
}

const InfoS = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    & div h5 {
        width: 80%;
        margin: 0 auto;
        margin-top: 10px;
    }
`


export default Info;