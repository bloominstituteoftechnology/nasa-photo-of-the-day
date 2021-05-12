import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
// import component
// import component

const App = () => {

  // State slice hooks
  // const [] = useState()
  // const [] = useState()
  // const [] = useState()
  
  // GET https://api.nasa.gov/planetary/apod
  // axios
  //   .get("https://api.nasa.gov/planetary/apod")
  //   .then((res) => {

  //   })
  // .catch((err) => {
  //   debugger
  // })
  
  // };

function App() {
  return (
    <div className="App">
      <p>
        {/* add child components and props to inject in each appropriate child(ex = <Pictures picture={picture}/>) */}
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
};


export default App;
