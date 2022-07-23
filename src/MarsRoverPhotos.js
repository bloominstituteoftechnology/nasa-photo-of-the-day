import React, {useEffect, useState} from 'react'
import MarsPhotos from './MarsRoverPhotosChild'
import axios from 'axios'
import {API_KEY} from './index'
import {MarsButtonsContainer, Button, MarsH2, Para} from './css/MarsCSS'

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

    const indexOne = marsData[0]
        
    return(
         <div>
         <MarsButtonsContainer>
            <MarsH2>Mars Photo<br></br>Selector</MarsH2>
         <Button onClick ={increaseDate}>Increase Day</Button>
         <Button onClick ={decreaseDate}>Decrease Day</Button>
         <Para> Date: {date === date ? indexOne?.earth_date
         : <Para>Too far.  Reverse!</Para>} </Para>
         <Button onClick={nextPage}>Next Page</Button>
         <Button onClick={prevPage}>Prev Page</Button>
          <Para>Page: {img}</Para>
            </MarsButtonsContainer>
         {
          marsData.length > 0 ? marsData.map(e=>
            <MarsPhotos img={e.img_src} key={e.id} camera={e.camera.full_name} />
         )
         : <p>No pictures taken on this day...try a different date, or going back a page!</p>
         }
        </div>
    
    )
    }

export default MarsRoverPhotos