import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import Photo from "./Photo";
import NavBar from "./NavBar";

function App() {
  
  const [photoOfTheDay, setPhotoOfTheDay] = useState("")

  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Q6RD3lJAhyj5FK5PBQDjbzBnfmHtEtIbEcrCVWjS")
    .then(res => {
      console.log(res.data)
      setPhotoOfTheDay(res.data)
    })
    .catch(err => {
      console.log(err)
      setPhotoOfTheDay({
        copyright: "",
        title: "404 Photo Not Found",
        explanation: "You have selected an invaid date, please try another",
        hdurl: "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        media_type: "image",
        service_version: "yes",
        url: "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      })
    })
  },[])
  
  return (
    <div className="App">
        <NavBar
          photoOfTheDay = {photoOfTheDay}
        />

        <Photo
          photoOfTheDay = {photoOfTheDay}
        />
    </div>
  );
}

export default App;
