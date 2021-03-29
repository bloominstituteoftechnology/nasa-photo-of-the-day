import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // fetch will go here
  const url = 'https://api.nasa.gov/planetary/apod?api_key=hbQeB0ODFwlwO5hu3xLYgmNfwQicougVUBPwVIdx';
  async function getData(url) {
    try {
      const res = await axios.get(url);
      const picture = await res.data;
      return picture;
    } catch(err) {
      console.log(err)
    }
  }
  const APIResponse =  getData(url);
  const [data, setData] = useState(APIResponse)
  // this is a use effect that changes the picture when the day changes
  // useEffect(
  //   setData(
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //   ), [Date.day]
  // )
  console.log(data);
  return (
    <div className="App">
      <img src={data.url} alt="picture"></img>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
