import React from "react";
import "./App.css";
import axios from "axios";

function App() {


  axios.get('https://api.nasa.gov/planetary/apod?api_key=JPdEuTaesq36aLpUHKFaSl9AfGzypW2GMFeDDa86')
  .then(resp=>{
    console.log(resp)
  })
  .catch(err=>{
    console.error(err);
  })
  return (
    <div className="App">
      <p>
         Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
