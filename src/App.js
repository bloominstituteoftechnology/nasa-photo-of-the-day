/**Thomas Bielawski
 * Lambda School WEB45
 * 2.2.3 Nasa APOD app.js
 * 7/14/2021
 * 2.2.4 Nasa APOD advanced styling
 * 7/15/2021
 */


//Import statements
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Date from "./components/Date";
import Title from "./components/Title";
import Info from "./components/Info";
import Media from "./components/Media";
import styled from 'styled-components'

//Defined a div style for the main page, assigned to SpaceFriend
const SpaceFriend = styled.div`
  background-color: blue;
  &:hover{background-color: gray}
  color:white;
`;

//Defined a div style for the  spans, assigned to SpaceSpan
const SpaceSpan = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid black;
    flex-basis: content;
`;

//Defined a div style for the explanation span, assigned to SpaceSpanExp
const SpaceSpanExp = styled.span`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid black;
    padding-left: 10%;
    padding-right: 10%;
    flex-basis: content;
`;

//App function definition
function App() 
{

  //Declare the state variable, init empty
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

      //Invoke setData() to set the data
      setData(res.data);
    })

    //Catch() function
    .catch(err => console.log("There was an error. Fix your code!" + err))

  //empty array to prevent infinite calls 
  }, []) 

  //Return function
  return(
    <SpaceFriend className="App"> 
      <p>
       NASA APOD <span role="img" aria-label='go!'>🚀</span>!
      </p>

      {/**Render the title */}
      <SpaceSpan className = "Span">
      <Title title = {data.title} />
      </SpaceSpan>
      
      {/**Render the date */}
      <SpaceSpan className = "Span">
      <Date date = {data.date} />
      </SpaceSpan>
      
      {/**Show the info */}
      <SpaceSpanExp className = "Span">
      <Info explanation = {data.explanation} />
      </SpaceSpanExp>
      
      {/**Render the video player */}
      <SpaceSpan className = "Span">
      <Media url =  {data.url} />
      </SpaceSpan>
      
    </SpaceFriend>
    
  );
}

//App export statement
export default App;
