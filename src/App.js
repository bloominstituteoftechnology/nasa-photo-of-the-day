/**Thomas Bielawski
 * Lambda School WEB45
 * 2.2.3 Nasa APOD app.js
 * 7/14/2021
 */


//Import statements
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Date from "./components/Date";
import Title from "./components/Title";
import Info from "./components/Info";
import Media from "./components/Media";



//App function definition
function App() 
{
  //
  const [data, setData] = useState({});

  //effect hook function
  useEffect(() => 
  {
    //Axios gets data from the url
    axios.get("https://api.nasa.gov/planetary/apod?api_key=qlkWEOda9rWNiLcFqebrTUZcf1a60KVcCAYV2RYH")
    //then() function
    .then(res => 
    {
      //Log the results
      console.log(res.data);
      //Invoke setDat() 
      setData(res.data);
    })

    //Catch() function
    .catch(err => console.log("There was an error. Fix your code!" + err))
  }, [])

  //Return function
  return(
    <div className="App"> 
      <p>
       NASA APOD <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {/**Render the title */}
      <Title title = {data.title} />

      {/**Render the date, comes through as h2 */}
      <Date date = {data.date} />

      {/**Show the Info */}
      <Info explanation = {data.explanation} />

      {/**Render the video player */}
      <Media url =  {data.url} />
           
    </div>
  );
}

export default App;
