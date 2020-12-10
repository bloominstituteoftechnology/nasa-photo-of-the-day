import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'
import './App.css'
import styled, { keyframes } from 'styled-components';

const keyF = keyframes`
    100%{
        opacity:1;
    }
`

const Styling = styled.div`
.description{
    color:${pr=>pr.theme.primaryColor};
    margin: 20px 18%;
    font-size: 1.1rem ;
}
.DateSelect{
  display: flex;
  justify-content:center;
}
.DateSelect p{
  width: 13%;
  font-size: 1.2rem;
  color:${pr=>pr.theme.primaryColor}
}
.DateSelect input{
  width: 25%;
  background-color:${pr=>pr.theme.primaryColor};
  text-align:center
}
.pictureOfTheDay{
  width: 80%;
  height: 75vh;
  opacity: 0;
  animation: ${keyF} 1.2s ease-in-out forwards;
  transition: all 1s ease-in-out;
}


`


export default function PictureCard(){
    
    const [nasa, setNasa] = useState([]);
    const [year, setYear] = useState(2012);
    const [month, setMonth] = useState(5);
    const [day, setDay] = useState(18);
    const url =`https://api.nasa.gov/planetary/apod?api_key=HhkpRzRlYBaa4Ad2NQmUWFvL6R2AjkcM01UKwCMT&date=`
    

    const handleYear = event => {
        setYear(event.target.value);
    };

    const handleMonth = event => {
        setMonth(event.target.value);
    };

    const handleDay = event => {
        setDay(event.target.value);
    };

    useEffect(() => {
        axios.get(`${url}${year}-${month}-${day}`)
            .then(res =>
                setNasa(res.data)
            )
            .catch(err=>
                console.log(err)
                )
    }, [year, month, day])

    // {nasa.media_type === 'image'
    // ? <img className="pictureOfTheDay" src={dailyPhoto.url} alt='pictureOfTheDay'> </img>
    // : <iframe title='video of the day' width='600' height='400' src={nasa.url + '?controls=0'}></iframe>
    
    // }
        console.log(nasa)

    return (
        <Styling>
             {nasa.media_type === 'image'
            ? <img className="pictureOfTheDay" src={nasa.url} alt='Daily Picture'/>
            : <iframe title='Daily Video' width='1060' height='600' src={nasa.url + '?controls=0'}/>
            }
            <div className='DateSelect'>
                <p>Year <input type="text" placeholder="Year" value={year} onChange={handleYear}/></p>
                <p>Month <input type="text" placeholder="Month" value={month} onChange={handleMonth}/></p>
                <p>Day <input type="text" placeholder="Day" value={day} onChange={handleDay}/></p>
            </div>
            <p className='description'>Description: {nasa.explanation}</p>
        </Styling>
    )
}