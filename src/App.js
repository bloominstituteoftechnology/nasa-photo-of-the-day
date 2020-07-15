import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

import POD from './components/POD'
import Rover from './components/rovers'

const tempAPI = {
  "copyright": "Philipp Salzgeberfoto-webcam.euAdam Block",
  "date": "2020-07-15",
  "explanation": "Comet NEOWISE has been wowing photographers around much of the world during dawn and dusk, at the margins of day and night.  For the most northern residents of planet Earth, however, the comet circles the North Star and never sets. The night part of this circular arc is apparent in the featured composite of images assembled from a webcam located at a ski resort in the Swiss Alps.  Images were selected at 30-minute intervals throughout the night from July 12th -13th. Comet NEOWISE (C/2020 F3) will continue to become more accessible to northern hemisphere observers as its motion places it higher in the sky each evening after sunset over the next few weeks, as it begins its outbound journey.  As with all comets, departure from the inner Solar System comes with inevitable fading.  Binoculars are the best way to find and observe the comet visually.    Notable Images of Comet NEOWISE Submitted to APOD:  || July 14  || July 13  || July 12  || July 11  || July 10 & earlier ||",
  "hdurl": "https://apod.nasa.gov/apod/image/2007/NeowiseAlps_salzgeber_4000.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Comet NEOWISE over the Swiss Alps",
  "url": "https://apod.nasa.gov/apod/image/2007/NeowiseAlps_salzgeber_960.jpg"
}
// console.log(typeof(tempAPI))


function App() {
  const [image, setImage] = useState('')
  const [rover, setRover] = useState('')
  
  useEffect(() => {
    setImage(tempAPI)
  },[])
// useEffect(() => {
//   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//.then(res => {
// setImage(res.data)
// })
// .catch(err => {
//console.log(err)
// })
// }, [])
useEffect(() => {
  axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
.then(res => {
  console.log(res)
setRover(res.data.photos[Math.floor(Math.random() * res.data.photos.length)])
// console.log(res.data.photos[Math.floor(Math.random(res.data.photos.length))].img_src)
})
.catch(err => {
console.log(err)
})
}, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <POD image={image}/>
      <Rover rover={rover}/>
    </div>
  );
}

export default App;
