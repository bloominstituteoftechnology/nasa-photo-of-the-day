import axios from "axios";
import React, {useState, useEffect} from "react";
import styled from 'styled-components'


const Styling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
  height: 55vh;
  width: 45vw;
}

.button {
  height: 6vh;
  width: 8vw;
  margin-top: 10px;
  background-color: #cacfd9;
  border-color: black;
}
`
function App() {
  const [url, setUrl] = useState('')
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=WRmpzQ07LjbF2hNG9g5O0M4yDhLsCbFqcUb5vx7u')
    .then(res => {
      setUrl(res.data.hdurl)

    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  function IOFD ({url}) {
    // eslint-disable-next-line
    return <img className='img' src={url} alt='NASA Image of the Day'/>
  }
  const refresh = () => {
    window.location.reload();
  }
  return (
    <Styling>
      <h1>NASA IMAGE OF THE DAY</h1>
      <IOFD url={url}/><br></br>
      <button className='button' onClick={refresh}>Reload</button>
    </Styling>
  );
}

export default App;
