import React, {useState, useEffect} from "react"; // 
import "./App.css";

//install and import axios from node
import axios from 'axios'
//import all things from components✅
import NasaPhotos from './components/NasaPhotos'




function App() {
  const [data, setData] = useState('New useState here 👋')
  useEffect (() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=XHgOW6KlgqBCFVgNyF3tGFp7OkWtJnng1PLvYyeY')
    .then ((response) => {
      setData(response.data)
    })
    .catch((error)=> {
      console.log(error)
    })
  }, [])


  return (
  <div className='App'>
  {NasaPhotos ({'data':data}) }
</div>
);
}

export default App;