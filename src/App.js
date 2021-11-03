import React from "react";
import "./App.css";
import axios from 'axios';
//Read through the instructions in the README.md file to build your NASA
//app! Have fun
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(resp => {
  console.log(resp);

})
.catch(err => {
  console.error(err);
})

function App() {
  return (
    <div className="App">
      <p>
         <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
