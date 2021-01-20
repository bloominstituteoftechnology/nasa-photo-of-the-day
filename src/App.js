import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import "./App.css";
import axios from 'axios';
import Box from './Components/Box';

function App() {
  const [ nasaPhoto, setNasaPhoto ] = useState({});
  let test    = new Date().toLocaleDateString("en-US")
  console.log('Test date: ', test);
  useEffect(() =>{
   axios.get('https://api.nasa.gov/planetary/apod?api_key=STdN9oOr47TeHRg3INbqyodC9IYKN9egYtKaGAwC&date')
   .then((res) =>{
     setNasaPhoto(res.data);
     
   })
   .catch(err => console.log(err))
 }, [])
  return (
    <div className="App">
      <Box Box = {nasaPhoto}/>
      
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
