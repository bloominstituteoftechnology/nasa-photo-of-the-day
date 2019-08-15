import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import PhotoCard from "./components/PhotoCard";


function App() {

  const [data, setData] = useState({});
  useEffect(() => { 
    
    console.log("first render");
    axios.get("https://api.nasa.gov/planetary/apod?api_key=FV9XPDuFMNnxtlmvZKdmrjRKUNydPKsFj5pHNhVk")
    
  .then(res => {
      console.log(res.data);
      setData(res.data);
      
    });

  }, []);
  

  

  return (
    <div className="App">
      <header> <h1>Nasa Photo Project</h1></header>
      {/* <Container textAlign='right'> */}
      <PhotoCard title={data.title} 
                  url={data.url}
                  explanation={data.explanation} />
                  {/* </Container> */}
    </div>
  );
}

export default App;
