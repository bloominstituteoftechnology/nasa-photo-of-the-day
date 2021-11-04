import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";

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
    <div className="App">
      <h1>NASA IMAGE OF THE DAY</h1>
      <IOFD url={url}/><br></br>
      <button className='button' onClick={refresh}>Reload</button>
    </div>
  );
}

export default App;
