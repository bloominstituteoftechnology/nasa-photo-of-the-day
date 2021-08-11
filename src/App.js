import React from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY} from "./constants/index"

axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(err);
  })


function App() {
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
