import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
const [data, setData] = useState([])

const effectFunction = () => {
  axios
  // .get('https://api.nasa.gov/planetary/apod?api_key=nRK36ubQgVtpSsq660on5sgVM6JRqRwxYaOvGx4E')
  .then((resp) => 
  {console.log(resp.data)
    setData(resp.data)
    
  })
  .catch((error) => console.log(error))
}
useEffect(effectFunction);


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


// explanation: title: url:
