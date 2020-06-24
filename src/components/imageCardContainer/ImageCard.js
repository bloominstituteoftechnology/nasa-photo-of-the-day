import React, { useState } from "react"
import "./ImageCard.css"
const ImageCard = ({ data, changeDate, date}) => {
    const [currentDay, setCurrentDay] = useState(new Date())

    const changeDay = (operator) => {
        if (operator === "+" ) {
            const next = new Date(currentDay.getTime() + (24 * 60 * 60 * 1000))
            setCurrentDay(next)
        } else {
            const next = new Date(currentDay.getTime() - (24 * 60 * 60 * 1000))
            setCurrentDay(next)
        }
        
        changeDate({
            day: currentDay.getDate(),
            month: currentDay.getMonth() + 1,
            year: currentDay.getFullYear()
        })
        
    }
    console.log(date)
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (
        <div className="img-container">
            <div className="title">
                <img className="logo" src="https://i.imgur.com/x2vJ26i.png"/>
                <h1>Astronomoy Picture of the Day</h1>
            </div>

            <div className="img-wrapper">
                <div className="date-wrapper">
                    <div onClick={() => changeDay("-")} className="left-arrow">&#8592;</div>
                    <div className="date">{monthArr[currentDay.getMonth()]}&nbsp;{currentDay.getDate()}</div>
                    <div onClick={() => changeDay("+")} className="right-arrow">&#8594;</div>
                </div>
                <img src={data.url} />
                <p className="explanation">{data.explanation}</p>
            </div>
        </div>
        
    )
}

export default ImageCard