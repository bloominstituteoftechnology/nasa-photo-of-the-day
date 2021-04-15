import React, {useState, useEffect} from "react";
import "./App.css";


function App() {
  const [dataSet, setDataset] = useState(null)
  const [photo, setPhoto] = useState(null)

  useEffect(function(){
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=J1HZTloMkDyltYkA5IkQUYsKarYaqq3qrqwYWCvk')
    .then(function(res){
      setDataset(res.data)
      setPhoto(res.data.hdurl)
      console.log(res.data.hdurl)
    })
    .catch(function(err){
      console.log(err)
    })
  })

  console.log(dataSet)

  const NasaImage = (props) => (
    <div>
      <img src = {props.photo} alt='alt'></img>
    </div>
  )


  return (
    <div className="App">
      <NasaImage photo={photo}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
