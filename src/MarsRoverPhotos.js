import React, { useEffect, useState } from 'react'
import MarsPhotos from './MarsRoverPhotosChild'
import axios from 'axios'
import { API_KEY } from './index'
import { MarsButtonsContainer, Button, MarsH2, Para, Para2, DateInput} from './css/MarsCSS'

function MarsRoverPhotos() {

    const [marsData, setMarsData] = useState([])
    const [img, setImg] = useState(1)
    const [date, setDate] = useState(null)

    const nextPage = () => {
        setImg(img + 1)
    }

    const prevPage = () => {
        setImg(img - 1)
    }



    useEffect(() => {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&page=${img}&api_key=${API_KEY}`)
            .then(res => {
                return setMarsData(res.data.photos)
            })
            .catch(err => {
                console.log(err)
            })

        return () => {
            console.log('cleaned up YW')
        }
    }, [img, date])

    return (
        <div>
            <MarsButtonsContainer>
                <MarsH2>Mars Photo<br></br>Selector</MarsH2>
                <Para>Select a date <p className='icn-spinner'><i class="fa-solid fa-bahai"></i></p></Para>
                <DateInput type='date' onChange={(e)=>{setDate(e.target.value)}}></DateInput>
                <Para>Date: {date}</Para>
                <Button onClick={nextPage}>Next Page</Button>
                <Button onClick={prevPage}>Prev Page</Button>
                <Para>Page: {img}</Para>
            </MarsButtonsContainer>
            {
                marsData.length > 0 ? marsData.map(e =>
                    <MarsPhotos img={e.img_src} key={e.id} camera={e.camera.full_name} />
                )
                    : <Para2>Make sure you select a date!<br></br>
                    If you did, there was <br></br>
                    0 pictures taken on this day.<br></br>
                    Try a different date!</Para2>
            }
        </div>

    )
}

export default MarsRoverPhotos