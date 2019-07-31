import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import axios from 'axios'

export default function NasaPhotos(props) {
  const [pictures, setPicture] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(date => {
    setIsLoading(true)
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=KXLFCSFcc0A2LkvgNlG7acLVKNKmonK7SonHhvQL')
      .then(res => {
        console.log(res)
        setPicture(res.data.url)
        setIsLoading(false)
      })
  }, [pictures])
  return (
    <div>
      {isLoading && <h1>Photos from Nasa are loading</h1>}
      <Photo img={pictures}/>
    </div>
  )
}