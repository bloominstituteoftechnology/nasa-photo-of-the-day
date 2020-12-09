import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Header from './component/Header'


export default function PictureCard(){
    
    const [nasa, setNasa] = useState([]);
    const [year, setYear] = useState(2019);
    const [month, setMonth] = useState(5);
    const [day, setDay] = useState(18);
    const url =`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=`
    

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
    }, [year, month, day])


    return (
        <div>
            
            <img className="pictureOfTheDay" src={nasa.hdurl} />
            <div className='DateSelect'>
                <p>Year <input type="text" placeholder="Year" value={year} onChange={handleYear}/></p>
                <p>Month <input type="text" placeholder="Month" value={month} onChange={handleMonth}/></p>
                <p>Day <input type="text" placeholder="Day" value={day} onChange={handleDay}/></p>
            </div>
            <p className='description'>Description: {nasa.explanation}</p>
        </div>
    )
}