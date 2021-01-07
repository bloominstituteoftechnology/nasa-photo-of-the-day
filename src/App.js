import React, { useState, useEffect } from "react";
import { Card } from 'reactstrap';
import axios from 'axios';
import "./App.css";
import PhotoContainer from './PhotoContainer';
import Button from './Button';





function App() {
  const [data, setData] = useState({});
  // const [spacePic, setSpacePic] = useState("");

  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=VrIt8zbnbQuvEUyhutYBiSfGEkDcZ4cIU5iyHzSW")
      // Which we then set to state
      .then(res => {
        setData(res.data);
      // console.log("fetch data", res.data);
      })
      // Always include error handling
      .catch(err => console.log(err));
      
  }, []);

  // console.log("Data: ", data);

  return (
    <div className="App">
      <Card class="card">
        <PhotoContainer data={data} />
      </Card>

      <Button props={data}/>
    </div>


  );
}

export default App;
