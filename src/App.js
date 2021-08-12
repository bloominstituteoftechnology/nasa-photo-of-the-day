import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photo from './components/Photo'

import styled, { keyframes } from 'styled-components';
import "./App.css";

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledApp = styled.div`
  text-align: center;
  margin: 0 auto;
  background-color: ${pr => pr.theme.backgroundColor};
  color: ${pr => pr.theme.primaryColor};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 62.5%;

`

const test = {
  url: 'https://apod.nasa.gov/apod/image/2108/M20-SHO-crop-Rev-5-RGB-Ha-OIII-RiDK-700-19-July-2021-1024.jpg',
  title: 'A Beautiful Trifid',
  date: '2021-08-12',
  explanation: `The beautiful Trifid Nebula is a cosmic study in contrasts. Also known as M20, it lies about 5,000 light-years away toward the nebula rich constellation Sagittarius. A star forming region in the plane of our galaxy, the Trifid does illustrate three different types of astronomical nebulae; red emission nebulae dominated by light from hydrogen atoms, blue reflection nebulae produced by dust reflecting starlight, and dark nebulae where dense dust clouds appear in silhouette. But the red emission region roughly separated into three parts by obscuring dust lanes is what lends the Trifid its popular name. Pillars and jets sculpted by newborn stars, below and left of the emission nebula's center, appear in famous Hubble Space Telescope close-up images of the region. The Trifid Nebula is about 40 light-years across. Just too faint to be seen by the unaided eye, it almost covers the area of a full moon in planet Earth's sky.`,
  copyright: 'Mike Selby'
}

function App() {
  const [photo, setPhoto] = useState();
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date')
  //     .then(res => {
  //       setPhoto(res.data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       setError("Sorry, try again soon");
  //     })
  // }, []);
  useEffect(() => {
    setPhoto(test);
  }, []);

  

  return (
    <StyledApp className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      { error && <h1>{error}</h1> }
      <div className='loading'>
        { !photo && <h3>Loading...</h3> }
      </div>
      {
        photo && <Photo photo={photo} setPhoto={setPhoto} />
      }
    </StyledApp>
  );
}

export default App;
