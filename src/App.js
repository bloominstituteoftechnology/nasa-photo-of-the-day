import React, {useState, useEffect} from "react";    
// In this section we are fetching the data. We will be adding a state to the data coming from Nasa
import "./App.css";

import axios from 'axios';


function App() {

const [nasaData, setNasaData] = useState(null)




  useEffect(() => { 
    // useEffect is getting the inquires
   axios.get("https://api.nasa.gov/planetary/apod?api_key=arIBGYJkeDeDdNT9uRhlFcIJLhJ04WRFti1So")
   .then(res => {
     console.log(res)
 

    setNasaData(res.data)  //the data getting back contains mostly an array


   
   
   })
   .catch(err => {
     console.log(err)
   }) 

  }) 
  
 


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
