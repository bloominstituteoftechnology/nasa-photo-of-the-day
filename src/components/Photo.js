import React from "react";
//import ReactDOM from "react-dom";

//ReactDOM.render(<App />, document.getElementById("root")); //This is on the home index page

export default function Photo(props) {//This props becomes the 'dark-blue' data from App.js

  const { nasaData } = props; // this is the destructuring, since we're not changing state within the photo container 
  //  const { copyright, date, explanation, hdurl, title, url } = props;
    console.log("Data:", nasaData);
    //console.log("Title:", data.title);
//To be sure we are receiving our data
   return (
    <div className="photo-card">
        <div className="photo"> 
            <img id="thing-of-the-day" src={nasaData.url} alt="NASA Pic Of The Day"></img>
        </div>
        
        <div className="photo-info">
          <div>
            <h2>{nasaData.title}</h2>
            <p>By: {nasaData.copyright}</p>
            <p>Date: {nasaData.date}</p>
            <p>{nasaData.explanation}</p>
            
          </div>
        </div>
    </div>
  );
} 
