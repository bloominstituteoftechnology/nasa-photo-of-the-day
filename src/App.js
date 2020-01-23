import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import axios from "axios";
import Card, {changeDate} from "./Components/Card";


function App() {
  const [ apod, setApod ] = useState([]);

  
    useEffect(() => {
      axios
          .get('https://api.nasa.gov/planetary/apod?api_key=7pwSaTDuJbsj6nF85g44NoTS5ABm3C5umZp4UhdC')
          .then(response => {
              //console.log(response.data);
              setApod(response.data);
          })
          .catch(error => {
              console.log("The data was not returned", error)
          });
   }, []);
    

  return (
    <div className="App">
        {/* <p>
    //     Read through the instructions in the README.md file to build your NASA
    //     app! Have fun 🚀!
    //   </p> */}
      
      <Card
        key={apod.id}
        hdurl={apod.hdurl}
        copyright={apod.copyright}
        date={apod.date}
        explanation={apod.explanation}     
      />
    </div>
  );
}

export default App;
