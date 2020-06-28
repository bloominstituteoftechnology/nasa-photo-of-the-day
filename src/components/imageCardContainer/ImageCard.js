import React, { useEffect, useState } from "react"
import axios from "axios"
import "./ImageCard.css"
import moment from "moment"
// import styled, { css } from "styled-components"
 
const ImageCard = () =>{
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"))
    const [data, setdata] = useState([])
    
    const changeDay = (newDate) => {
        if ((newDate.replace(/-/g, "") <= moment().format("YYYYMMDD") && newDate !== date) && (newDate.replace(/-/g, "") > "19990101")) setDate(newDate)
    }

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=nUuIApI33z9ii9bOvfvcgpBhGDCqsYQyMjzIgGd0&date=${date}`)
            .then((res) => setdata(res.data))
            .catch((err) => console.log(err))
    }, [date])

    if (!data) return <h3>Loading...</h3>

    if (data.media_type === "image") {
        return (
            <div className="card-container">
                <div className="header">
                    <img className="logo" src="https://i.imgur.com/x2vJ26i.png" alt="NASA logo" />

                    <h1>NASA &nbsp;APOD</h1>
                    <input className="calendar" onChange={(event) => changeDay(event.target.value)} type="date" />
                </div>

                <div className="card-wrapper">
                    <img src={data.url} alt="astronomy" />
                    <h4>{data.title}</h4>
                    <p>{data.explanation}</p>
                </div>

            </div>
        )
    } else {
        return (
            <div className="card-container">
                <div className="header">
                    <img className="logo" src="https://i.imgur.com/x2vJ26i.png" alt="NASA logo"/>
                    <h1>NASA &nbsp;APOD</h1>
                    <input className="calendar" onChange={(event) => changeDay(event.target.value)} type="date" />
                </div>
                <div className="card-wrapper">
                    <iframe width="100%" height="500px"
                        src={data.url}>
                    </iframe>
                    <h4>{data.title}</h4>
                    <p>{data.explanation}</p>
                </div>

            </div>
        )
    }
    
}

export default ImageCard