import React, { useState, useEffect } from "react";
import Axios from "axios";

const Info = () => {
    const [info, setInfo] = useState('')

    useEffect(() => {
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DIUNE1bhaCU8KYZOCqr2qNyDe2E6bLdfnbtCZCTd`)
                .then(res => {
                    const info = res.data.explanation
                    setInfo(info);
                })
    }, [info])

    return(
        <div>
            <h3> { info } </h3>
        </div>
    )
}

export default Info;