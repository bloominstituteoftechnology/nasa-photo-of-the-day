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
        max-width: 85%;
        margin: 0 auto;
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.3),
                    0 5px 21px rgba(255,255,255, 0.2);
        border-radius: 5px;
        
    `
    // const Button = styled.button`
    //     background: lightgrey;
    //     opacity: 0.5;
    // `
    return (
        <Img src={image} alt="Photo of the day" onClick={() => setImage(image + 1)} />
       
    );
};

export default Image;