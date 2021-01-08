//NOTES ON BUILDING A REACT APP
/*
**Get your server up and running, open your terminal: npm install -dependencies
                                                      npm start - get server running
                                                      ?What is npx? Where/When do I use this?
1. Import React, your components, files, and axios - be sure to import your files following the file path
    * You will also import the destructured components from react-strap that you'll use for styling
2. Create the parent function App(), which inside will hold the axios GET request & create the slices of state
3. Create/add the state for the data you'll be getting
4. Create a useEffect hook which will contain the axios GET request for the API, at the endpoint you can attach the API KEY too.
    * request your data inside the useEffect, set to an empty array, so you are not making a infinite amount of API calls.
5. .get --> fetches the data, .then --> handles the success promise, .catch --> error handling
6. After you complete the API call in the function, return the formatted JSX holding the data
                            ///IN THE BEGINNING...///
7. To create a BRAND spankin' new React App from scratch - npx create-react-app my-app
    *This will create essentially a boilerplate of json files/dependencies to start off of. 
    Here is the order(typed into your terminal): 
          npx create-react-app 'my-app-name'
          npm i (or the longhand - npm install) - to get your dependencies set up
          npm install axios - if axios is not installed
          npm start - to get it live on the server
          
*/ 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from './components/Photo.js';
import axios from 'axios';





function App() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const API_KEY = '8adQhyE9TJsap80yfjJbINFpsjj5PNVHFeENwfBv';

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`) //This is the string literal inserting the API key
      //*above is using a query parameter to utilize the api_key
      .then(res => {
        setData(res.data);//Here we are applying the data to the state, so we can use it.
      // console.log("fetch data", res.data); So we can see our data.
      })
      // Always include error handling
      .catch(err => console.log(err));
      
  }, []); //setting this to an empty array makes sure that the request only happens one time

  console.log("Data: ", data);

  return (
    <div className="App">
      
        <Photo nasaData={data}/>
      
      
     
        
       
    </div>


  );
}

export default App;