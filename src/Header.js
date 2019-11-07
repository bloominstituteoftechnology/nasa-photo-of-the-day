import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const HeaderCont = styled.div`
  background-image: url("https://wallpapercave.com/wp/GjrkLhP.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #f5f5f5;
`;

function Header() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setPhoto(response.data.url);
      })
      .catch(error => {
        console.log("The photo was not returned.");
      });
  }, []);

  return (
    <HeaderCont>
      <img className="App-logo" src={photo} alt="Logo"></img>
      <h1>NASA Photo of The Day</h1>
      <div className="row">
        <div className="col-md-6 col-md-offset-3 text-center">
          <p>SEE MORE</p>
          <p className="scrollto--arrow">
            <img src="./scroll-down.png" alt="scroll down arrow"></img>
          </p>
        </div>
      </div>
    </HeaderCont>
  );
}

export default Header;
