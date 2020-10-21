import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/container/Container";
import Footer from "./components/Footer";
import axios from "axios";


function App() {
  const [data, setData] = useState([]);
  // console.log(data);
  
 
  useEffect(()=> {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=7xNkmfDJ544SvwhrFQOnBC67yBsFvSj0FY5Y3Y61&date=2020-09-02")
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.log(err));
  }, [])
  return (
    <div className="App">
      <Header />
      <Container nasaData={data}/> 
      <Footer />
    </div>
  );
}

export default App;
