import React, {useState, useEffect} from 'react'
import Posts from './components/Posts'
import Axios from 'axios'
import "./App.css";

function App() {
  const [data, setData] = useState([])

  const fetchData = () => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=2dYmiqXNAIT4hSBsaxX3FgUx6ndGHOXd3bNVk0MZ')
      .then(response => {
        //can't use UseState or useEffect, need to run data through the function!}
          setData(response.data /*real data from the API!*/)
      })
      .catch(error => {console.log('error in fetchData')})
      //use user effect to bring data back
  }

    useEffect(fetchData, []/* so that axios api call won't keep running*/)

    console.log(data);

  return (
    <div className="App">
      <Posts nasaVid={data.url} title={data.title} description={data.explanation} date={data.date}/>
    </div>
  );
}

export default App;
