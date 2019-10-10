import React, {useState,useEffect} from "react";
import axios from "axios";
import "./App.css";
import CreatePhoto from "./components/photoComponent";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=fzliRPzGtv8laLOSxUmx3BaFza3Hdc6nhogBMxba")
    .then( (response)=> {
      // handle success
      console.log(response.data);
      setData(response.data);
       
     })
     .catch(function (error) {
      // handle error
       console.log(error);
     });

  }, []);
  console.log(data);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <p>test1</p>
      <CreatePhoto obj={data}/>
    </div>
  );
}

export default App;
