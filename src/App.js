import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [nasa,setNasa] = useState([])
useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => {
    setNasa(res.data)
  })
  .catch(err => {
    debugger
  })
}, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
