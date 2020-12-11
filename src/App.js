import React, {useState, useEffect} from "react";
import "./App.css";
import APOD from "./APOD"
import Header from "./Components/Header/header"
import { API_KEY, APOD_URL } from "./Constants/index"
import axios from "axios";
import Footer from "./Components/Footer/footer";


 function App() {

  const [apod, setApod] = useState({})
  
  useEffect( () => {

    axios.get(`${APOD_URL}?api_key=${API_KEY}`)
    .then((res) => {
      setApod(res.data)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [] )


  
  return (
    
    <div className="App">
      {/* We are going to render three things here, header, APOD, and 
      imagecon */}
      <Header />
      <APOD apod={apod} />
      <Footer />
    </div>

  );
}

export default App;


