import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import HeaderMain from "./header/headerMain"
import Post from "./posts/post.js";


function App() {

	const [nasaData,updateData] = useState({});

	useEffect( () => {
		
		axios

		.get("https://api.nasa.gov/planetary/apod?api_key=pWpgfjxi1nYC0saBotYn7f0MzZZ0eF70Eyxp9VHW")

		.then(response => {

			// displaying data from api for inspection
			console.log(response.data)
			
			updateData(response.data)

			console.log(`${nasaData} is the data`);

		})

		.catch(err => {

			console.log('opps you done goofed');

		});

	}, []);

  return (
    
    <div className="App">

		<HeaderMain date = {nasaData.date}/>

		<Post title = {nasaData.title} date = {nasaData.date} url = {nasaData.url} desc = {nasaData.explanation}/>

    </div>
  
  );

}

export default App;
