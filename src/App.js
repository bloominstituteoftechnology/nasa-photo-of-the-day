import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

/* const axios = require('axios').default; */

function App() {

useEffect(() =>{

axios.get(https://api.nasa.gov/#apod)
     .then((response)=>console.log(response))
     .catch(error => console.log(error))
    
},[])
              
const [state,setState] = useState()


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
