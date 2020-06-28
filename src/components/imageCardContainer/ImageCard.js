import React, { useEffect, useState } from "react"
import axios from "axios"
import "./ImageCard.css"
import moment from "moment"
import styled, { css } from "styled-components"

export const Title = styled.h1`
    font-size: 3rem;
    font-family: 'MuseoModerno', cursive;
    color: rgba(32, 81, 201 , 1);
` ;

export const LogoImage = styled.img`
    width: 4rem;
    height: 4rem;
    margin-right: 3rem;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`

export const CardWrapper = styled.div`
    border: 2px solid black;
    width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.7);
`

export const Header = styled.div`
    display: flex;
    align-items: center;
`
 
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
            <CardContainer>
                <Header>
                    <LogoImage src="https://i.imgur.com/x2vJ26i.png" alt="NASA logo" />
                    <Title>NASA &nbsp;APOD</Title>
                    <input className="calendar" onChange={(event) => changeDay(event.target.value)} type="date" />
                </Header>
                <CardWrapper>
                    <img src={data.url} alt="astronomy" />
                    <h4>{data.title}</h4>
                    <p>{data.explanation}</p>
                </CardWrapper>
            </CardContainer>
        )
    } else {
        return (
            <CardContainer>
                <Header>
                    <LogoImage src="https://i.imgur.com/x2vJ26i.png" alt="NASA logo" />
                    <Title>NASA &nbsp;APOD</Title>
                    <input className="calendar" onChange={(event) => changeDay(event.target.value)} type="date" />
                </Header>
                <CardWrapper>
                    <iframe width="100%" height="500px"
                        src={data.url}
                        title={data.title}>
                    </iframe>
                    <h4>{data.title}</h4>
                    <p>{data.explanation}</p>
                </CardWrapper>
            </CardContainer>
        )
    }
    
}

export default ImageCard