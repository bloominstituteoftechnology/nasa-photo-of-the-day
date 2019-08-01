import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import axios from 'axios'

export default function NasaPhotos(props) {
  const [pictures, setPicture] = useState([])  //setting state
  const [isLoading, setIsLoading] = useState(false)  //setting state to false
  const [copyright, setCopyright] = useState([]) //setting state for the copyright
  const [explanation, setExplanation] = useState([]) //setting state for explanation by the copyrighter

  useEffect(date => { // hits an api
    setIsLoading(true) //sets boolean to true for photo is loading
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=KXLFCSFcc0A2LkvgNlG7acLVKNKmonK7SonHhvQL')  // sends a GET request for the API.
      .then(nasa => {              // changed res to nasa,why do we use res? is it just standard? ... If the request has been completed successfully the function is called with is passed into the call of the then method
        console.log(nasa) //logs res
        setPicture(nasa.data.url)
        setIsLoading(false) //loading is set to false because its been loaded
        setCopyright(nasa.data.copyright)
        setExplanation(nasa.data.explanation)
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
