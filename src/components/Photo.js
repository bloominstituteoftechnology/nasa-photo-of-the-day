import React from "react";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

//ReactDOM.render(<App />, document.getElementById("root")); //This is on the home index page

export default function Photo(props) {//This props becomes the 'dark-blue' data from App.js

  const { nasaData } = props; // this is the destructuring, since we're not changing state within the photo container 
  //  const { copyright, date, explanation, hdurl, title, url } = props;
    console.log("Data:", nasaData);
    //console.log("Title:", data.title);
//To be sure we are receiving our data
   return (
       
    <Card className="photo-card">
        <div className="photo"> 
            <CardImg id="thing-of-the-day" src={nasaData.url} alt="NASA Pic Of The Day"/>
        </div>
        
        <div className="photo-info">
          <CardBody>
            <CardTitle tag='h2'>{nasaData.title}</CardTitle>
            <p>By: {nasaData.copyright}</p>
            <p>Date: {nasaData.date}</p>
            <p>{nasaData.explanation}</p>
            
          </CardBody>
        </div>
    </Card>
  );
} 
