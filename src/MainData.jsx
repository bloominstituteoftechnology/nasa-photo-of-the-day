import React, {useState, useEffect} from 'react'
import axios from "axios";



function MainData (){
const [Media, setMedia] = useState([]);

useEffect(() => {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=ysbmouM5fhCOUpMLeZXAr2DbAnQCE6iun4ukTApX$date=2020-07-15")
    .then(response => {
      console.log(response.data)
      setMedia(response.data)
    })
    .catch(err => {
      console.log('err')
    })
}, []);

return (
  <div className="App">
      <div>
    <h1>
      {Media.title} <span role="img" aria-label='go!'>🚀</span>!
    </h1>
    <h3>{Media.date}</h3>
    </div>
    <div><img alt="data" src={Media.hdurl}></img></div>
   <div> <p><span>Explanation: </span>{Media.explanation}</p> </div>
  </div>
);
}

export default MainData;