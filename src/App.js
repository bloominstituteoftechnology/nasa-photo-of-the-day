import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // fetch will go here
  const url = 'https://api.nasa.gov/planetary/apod?api_key=hbQeB0ODFwlwO5hu3xLYgmNfwQicougVUBPwVIdx';
  const APIResponse = fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
  console.log(Date.now());
  const [data, setData] = useState(APIResponse)
  // useEffect(
  //   setData(
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //   ), [Date.day]
  // )
  return (
    <div className="App">
      <img src={data.url}></img>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
