import React, {useState, useEffect} from 'react';
import "./App.css";
import axios from 'axios';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js'

function App() {
  const [data, setData] = useState("");
  
  return (
  <div>
  <Header/>
  <Main/>
  <Footer/>
  </div>
  );
}

export default App;
