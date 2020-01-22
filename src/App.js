import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [ dataFromAPI, setDataFromAPI ] = useState([]);

  useEffect(() =>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then((response)=> {
    console.log(response.data);
    // setDataFromAPI(response);
  })
  .catch((error)=>{
    console.log(error);
  }, []);
})


  return (
    <div className="App">
      {
        // dataFromAPI.map((item, index) => {
        //   // console.log(item);
        //   return <Card  
        //   index={index}
        //   image={item.image} 
        //   identifier={item.identifier}
        //   caption={item.caption}
        //   />
        // })
      }
    </div>
  );
}

export default App;
