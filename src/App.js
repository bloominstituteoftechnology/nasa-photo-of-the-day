
import React, { useState } from "react";
import axios from 'axios';
import "./App.css";
import styled from 'styled-components';
import theme from "./theme";

const StyleForApp = styled.div`
  width: 90%;
  display: flex;
  padding: 50px;
  text-align: center;
  img {
    width: 90%;
    border-bottom: dashed 3px black;
    padding-bottom: 50px;
  }
  p {
    color: ${props => props.theme.black};
    width: 90%;
    text-align: center;
  }
  h1 {
    font-size: 4rem;
    color: #444;
    text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee,
      5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc;
  }
  .copyRight {
    color: ${props  => props.theme.copyright}
  }
  
.paraExp {
  width: 90%
  background-color: red;
  color: Gray;
}

a {
  text-decoration: none;
  font-style: italic;
  font-weight: bold;
  color: ${props => props.theme.black}
}

`;


function App() {
  
  const [data, setData] = useState([])

  useState(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=7a7bYA3ipfTvADYVm3EIqqaWOu78lenSoLESVlj0')
  .then(res => {
    console.log(res.data)
    setData(res.data)
  })
  .catch(err => {
    console.log(err, "error")
  })
  },[] )
  

  
  return (
    <StyleForApp>
    <div className="App">
      <div>
        <h1>{data.title}</h1>
      </div>
      <p class="copyRight">CopyRight: {data.copyright}</p>
      <p>{data.date}</p>
      <p>Service Version {data.service_version}</p>
      <div>
      <img src={data.hdurl} alt={"randomPic"}/>
      </div>
      <div >
        <p class="paraExp">{data.explanation}</p>
      </div>
      <div>
        <a href="{data.url}">Click For Lagre Image</a>
      </div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
    </StyleForApp>
  );
}

export default App;
