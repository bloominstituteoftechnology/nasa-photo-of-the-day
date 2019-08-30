import React, { useState, useEffect } from "react";
import Axios from "axios";

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

    return(
        <div>
            <h3>{ text }</h3>
            <h3>{ date }</h3>
        </div>
    )
}

export default Header;