import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

const Image = () => {

    const [image, setImage] = useState([])

    useEffect(() => {
         Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DIUNE1bhaCU8KYZOCqr2qNyDe2E6bLdfnbtCZCTd`)
            .then(res => {
                console.log(res)
                const image = res.data.url
                setImage(image);
            })
    }, [image])

    const Img = styled.img`
        width: 85%;
        margin: 0 auto;
        border: 2px solid red;
        padding: 7px;
    `
    const Button = styled.button`
        background: lightgrey;
        opacity: 0.5;
    `
    return (
        <Button><Img src={image} alt="Photo of the day" onClick={() => setImage(image + 1)} />
        </Button>
    );
};

export default Image;