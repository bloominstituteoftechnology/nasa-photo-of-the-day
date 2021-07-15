import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY} from './constants/key';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Pic from './components/Pic';
import styled from "styled-components";




 function App() {
   const [contents, setContents] =useState([]);
   const [url, setUrl] =useState("");

  useEffect(() => {
    const fetchNasaData = () =>{
    axios.get(`${BASE_URL}${API_KEY}`)
    .then(res => {
      setContents(res.data);
    })
    .catch(err => {
      debugger
    });
  }
  fetchNasaData();
  }, []);

  const Container = styled.div`
  *{
    padding:0px;
    margin:0px
    font-family: san-serif;
    text-align: center;
    color: dodgerblue;
  }
  background: url("https://th.bing.com/th/id/R.64d990b38f70d749d1d6a2f9f0b919ec?rik=cl0Lt6wm1%2bzeqA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fs4DklAD.jpg&ehk=m2%2bSgH0Gl9ylyBW7uInbZyBX5vHZOUl29cyVqWn1liA%3d&risl=&pid=ImgRaw")
  background-position:center;
  background-repeat: no-repeat;
  background-size:cover;
  display:flex;
  flex-flow: column nowrap;
  align-items:center;
  justify-content:space-between;
  min-height: 100vh;
  box-sizing:border-box;

  }`;



  return (

    <Container className="container1">
      {/* <Header title={contents.title/> */}
      <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h1>TESTING</h1>
    </div>

    </Container>
  );
}

export default App;
