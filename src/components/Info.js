import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

const Info = () => {
    const [info, setInfo] = useState('')

    useEffect(() => {
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DIUNE1bhaCU8KYZOCqr2qNyDe2E6bLdfnbtCZCTd`)
                .then(res => {
                    const info = res.data.explanation
                    setInfo(info);
                })
    }, [info])

    const Div = styled.div`
        width: 85%;
        margin: 30px auto;
        // background: rgba(192,192,192,0.10);
        border-top: 5px solid rgba(192,192,192,0.10);
        border-bottom: 5px solid rgba(192,192,192,0.10);

    `
    const P = styled.p`
        &:first-letter {
            text-transform: capitalize;
            color: red;
            font-size: 2rem;
        }
        line-height: 1.5;
        padding: 10px 30px;
        border-radius: 5px;
    `

    return(
        <Div>
            <P> { info } </P>
        </Div>
    )
}

export default Info;