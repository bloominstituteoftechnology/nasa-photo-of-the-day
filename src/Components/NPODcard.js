import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'




    export default function NPODcard() {

        const [nasa, setNasa] = useState([]);
        const [year, setYear] = useState(2020);
        const [month, setMonth] = useState(11);
        const [day, setDay] = useState(17);

        console.log(nasa)

        const handleChange1 = event => {
            setYear(event.target.value);
        };

        const handleChange2 = event => {
            setMonth(event.target.value);
        };

        const handleChange3 = event => {
            setDay(event.target.value);
        };

        useEffect(() => {
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}`)
                .then(res =>
                    setNasa(res.data)


                )
        }, [year, month, day])


        return (
            <div>
                <h1>{nasa.date}</h1>
                <img className="nasaPic" src={nasa.hdurl} />
                <p className='description'>Description: {nasa.explanation}</p>
                <p>Copyright: {nasa.copyright}</p>
                <p>What day would you like to see?</p>
                <div className='DateSelect'>
                    Year
            <input
                        type="text"
                        placeholder="Year"
                        value={year}
                        onChange={handleChange1}
                    />

           Month
            <input
                        type="text"
                        placeholder="Month"
                        value={month}
                        onChange={handleChange2}
                    />

           Day
          <input
                        type="text"
                        placeholder="Day"
                        value={day}
                        onChange={handleChange3}
                    />


                </div>

            </div>
        )
    }