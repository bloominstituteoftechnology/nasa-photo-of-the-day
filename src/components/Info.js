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
    `

    return(
        <Div>
            <p> { info } </p>
        </Div>
    )
}

export default Info;