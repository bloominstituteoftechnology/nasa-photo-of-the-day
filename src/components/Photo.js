import React, { useState, useEffect } from "react";
import Axios from "axios";


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

    return (
        <button><img src={image} alt="Photo of the day" onClick={() => setImage(image + 1)} />
        </button>
    );
};

export default Image;