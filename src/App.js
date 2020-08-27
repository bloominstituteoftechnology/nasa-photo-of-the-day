import React from "react";
import "./App.css";
import NasaData from "./Components/NasaData";

function App() {
  // useEffect(() => {
  //   axios
  //   .get("https://api.nasa.gov/planetary/apod?api_key=rDLuS1OxbD26VJPygpmoRhTKPA0l6bb4sIHGGQJi&date=2020-08-08")
  //   //api data : date,explanation,hdurl,media_type,service_verison,title,url
  //   .then(res =>{ 
  //     console.log("res data :", res);
  //   })
  //   .catch(err => { 
  //     console.log("err msg : ", err);
  //   });
  // })
  return (
    <div className="App">
      <NasaData />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
