import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import './Photo.scss';

export default function PhotoData() {

    const [photos, setPhotos] = useState([]);
    const [openDate, setOpenDate] = useState(true)
    const [date,setDate] = useState('')

    console.warn('state Open Button', openDate)

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=JnWo6HiIwC9BG0xa2UyobaexzaMVqCbQi9h9hs6q&date=${date}`)
        .then(res => {
            console.log(res.data);
            setPhotos(res.data);
        })
        .catch(error => {
      console.log(error);
        })

    }, [date])

    return (
        <div className="wrapper"> 
            <div className="photo">
                 <PhotoCard props={photos.hdurl} />
            </div>
            
            <div className="info">
            <button onClick={() => setOpenDate(!openDate)}>
            {photos.date}
        </button>
              
               {/* Opened Button */ }

              { <div className={ `input ${openDate ? 'inputHide' : 'inputShow'}` }>
                 <input className="date-input" value={date} type='text' placeholder="YYYY-MM-DD" onChange= { (e) => setDate(e.target.value) } />
                   
                </div>
              }


                <h3 className="photoTitle">{photos.title}</h3>
                <p className="photoExplanation">{photos.explanation}</p>
            </div>
        </div>
    );
}

