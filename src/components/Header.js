import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

const Header = () =>  {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DIUNE1bhaCU8KYZOCqr2qNyDe2E6bLdfnbtCZCTd`)
                .then((res) => {
                    setText(res.data.title)
                })
                .catch(err => {
                    console.log(err)
                })

        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DIUNE1bhaCU8KYZOCqr2qNyDe2E6bLdfnbtCZCTd`)
        .then((res) => {
            setDate(res.data.date)
        })
        .catch(err => {
            console.log(err)
        })
    })

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-evenly
    `
    return(
        <Wrapper>
            <h3>DATE: { date }</h3>
            <h3>TITLE: { text }</h3>
        </Wrapper>
    )
}

export default Header;