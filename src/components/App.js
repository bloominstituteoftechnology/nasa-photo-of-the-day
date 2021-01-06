import React, {useEffect, useState} from "react";
import "../App.css";
import Photo from './Photo'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
 
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=d3tlUqH6cnLcnkFV80WFFgFzSycHd4IlbiI4X5ZZ')
    .then(response => {
        //console.log(response);
        setData(response.data);
      })
    .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
        <Photo data={data}/>
    </div>
  );
}

export default App;
