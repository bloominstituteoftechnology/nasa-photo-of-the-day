import React, {useState, useEffect} from "react";
import axios from "axios";
import Planet from "./components/Planet.js"
import "./App.css";

/* const axios = require('axios').default; */

function App() {

const [nasaState,setNasaState] = useState({});

useEffect(() =>{

    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
         .then((response)=>{
             console.log(response.data)
             setNasaState(response.data)
         })
         .catch(error => console.log(error))
},[])



    return (
        <div className="App">
            <p>
                Read through the instructions in the README.md file to build your NASA
                app! Have fun 🚀!
            </p>
            <Planet
                headImage={nasaState.hdurl}
                title={nasaState.title}
                date={nasaState.date}
                description={nasaState.explanation}
                imgUrl={nasaState.url} />
                copyright={nasaState.copyright}             

    </div>
  );
}

export default App;
