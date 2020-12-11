import React, { useState, useEffect } from 'react'
import TopBar from './topbar'
import MainHeader from './main-header'
import FeaturedImg from './featured-img'
import axios from 'axios'
import styled from 'styled-components'

////app styles
const StyledApp = styled.div`
  text-align: center;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`



function App() {

  const today = new Date();

  const [image, setImage] = useState([])
  const [picDate] = useState(today);


  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=krgov0zYymJ4pGF1sVUvTq1L6sDrvLv5DIdd4AD3&date=${picDate.getFullYear()}-${picDate.getMonth() + 1}-${picDate.getDate()}`)
      .then(res => {
        setImage(res.data)
      })
      .catch(error => console.log(error))
  }, [picDate])


  return (
    <StyledApp className='app-container'>
      <TopBar />
      <MainHeader image={image} />
      <FeaturedImg image={image} />
      {/* <div className="changeDate">
        <button onClick={() => {
          setDate(picDate - 1)
        }
        }>previous day</button>
        <button>next day</button>
      </div> */
      }
    </StyledApp>
  );
}
export default App;

