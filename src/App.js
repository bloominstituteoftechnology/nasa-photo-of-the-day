import React, { useState, useEffect } from "react";
import axios from 'axios';

import Media from './Media';
import Explanation from './Explanation';

import "./App.css";
// const API = "5WcQTPzJe6S99BQybOzlTvWi3XvYxO7xKmdSPuDZ"
// function App(props) {
//   const NasaPictures = () => {
//     const [photos, setPhotos] = useState([]);

//     useEffect(() => {
//         axios
//             .get('https://api.nasa.gov/planetary/apod?api_key=WkQiPbiZMW3bmRRzoV0rNN3bUZwbK0NbZv6hk6rg&date=2012-03-14')
//             // .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
//             .then(res => {
//                 console.log("res:", res);
//                 console.log("res.data:", res.data);
//                 console.log("res.config.url:", res.config.url);

//                 setPhotos(res.data);
//                 // setPhotos(res.config.url);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, []);
// }

function App() {

  const [data, setData] = useState({});

  const fetchData = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(fetchData, []);
  

  return (
    <div className="App">Hey
      
        {/* <Media data={data}  /> */}
      <Explanation explanation={data.explanation} />
      
      
    </div>
  );
}

export default App;