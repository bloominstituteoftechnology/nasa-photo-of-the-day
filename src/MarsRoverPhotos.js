import React, {useEffect, useState} from 'react'
import MarsPhotos from './MarsRoverPhotosChild'
import axios from 'axios'
import {API_KEY} from './index'

function MarsRoverPhotos(){

    const [marsData, setMarsData] = useState([])
    const [img, setImg] = useState(1)
    const [date, setDate] = useState(1000)

    const nextPage = () => {
        setImg(img +1)
    }

    const prevPage = () => {
        setImg(img -1)
    }
    const increaseDate = () => {
        setDate(date + 1)
    }
    const decreaseDate = () => {
        setDate(date - 1)
    }


    useEffect(()=>{
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${date}&page=${img}&api_key=${API_KEY}`)
        .then(res=>{ 
            return setMarsData(res.data.photos)
        }) 
        .catch(err=>{
            console.log(err)
        })

        return () =>{
            console.log('cleaned up YW')
        }
    }, [img, date])

    console.log(marsData)
    const indexOne = marsData[0]
        
    return(
         <div className = 'marsContainer'>
         <h1>Mars Photos</h1>
         <button className = 'date'onClick ={increaseDate}>Increase Day</button>
         <button className = 'date' onClick ={decreaseDate}>Decrease Day</button>
         <p> Date: {date === date ? indexOne?.earth_date
         : <p>Too far.  Reverse!</p>} </p>
         <button className ='page' onClick={nextPage}>Next Page</button>
         <button className ='page' onClick={prevPage}>Prev Page</button>
         <p>Page: {img}</p>

         {
          marsData.length > 0 ? marsData.map(e=>
            <MarsPhotos img={e.img_src} key={e.id} camera={e.camera.full_name} />
         )
         : <p>No pictures taken on this day...</p>
         }
        </div>
    
    )
    }

export default MarsRoverPhotos