import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import axios from 'axios'

export default function NasaPhotos(props) {
  const [pictures, setPicture] = useState([])  //setting state
  const [isLoading, setIsLoading] = useState(false)  //setting state to false
  const [copyright, setCopyright] = useState([]) //setting state for the copyright
  const [explanation, setExplanation] = useState([]) //setting state for explanation by the copyrighter

  useEffect(date => { // hits an api
    setIsLoading(true)
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=KXLFCSFcc0A2LkvgNlG7acLVKNKmonK7SonHhvQL')  // gets the api
      .then(res => {
        console.log(res) //logs res
        setPicture(res.data.url)
        setIsLoading(false) //loading is set to false because its been loaded
        setCopyright(res.data.copyright)
        setExplanation(res.data.explanation)
      })
  }, [pictures])  //if pictures updates, useeffect will run again
  return (
    <div>
      {isLoading && <h1>Photos from Nasa are loading</h1>}
        <h1>{copyright}</h1>
        <p>{explanation}</p>
      <Photo img={pictures}/>
    </div>
  )
}
