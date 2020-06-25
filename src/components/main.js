
import React, {useState, useEffect} from 'react'
import axios from "axios";



function Main (){
const [Media, setMedia] = useState([]);

useEffect(() => {
  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=G19D8VqjXPaE3FJG0UBbfsIpUBnDg4NkvXpCw2fQ')
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
      <div className="Header">
    <h1>
      {Media.title} <span role="img" aria-label='go!'>🚀</span>!
    </h1>
    <h3>{Media.date}</h3>
    </div>
    <div><img  className="pic" src={Media.hdurl}></img></div>
   <div className="Expla"> <p><span>Explanation: </span>{Media.explanation}</p> </div>
  </div>
);
}

export default Main;
