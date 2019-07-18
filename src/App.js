import React, {useState} from "react";
import axios from "axios";
import "./App.css";
import PhotoCard from "./components/PhotoCard";

function App() {

  const [data, setData] = useState({});
  

  axios.get("https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY")
    
  .then(res => {
      console.log(res.data);
      setData(res.data);
      
    });
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoCard title={data.title} 
                  url={data.url}
                  explanation={data.explanation} />
    </div>
  );
}

export default App;
