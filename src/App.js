import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";
import "./Description.js";
import Description from "./Description.js";

// Your API key for andrew.sohrabi@gmail.com is:

// rCiLxbpacIgUNvc3dJdaZaRgkJ1gYTvcEp8LGSzS
// You can start using this key to make web service requests. Simply pass your /// key in the URL when making a web request. Here's an example:

// https://api.nasa.gov/planetary/apod?api_key=rCiLxbpacIgUNvc3dJdaZaRgkJ1gYTvcEp8LGSzS


function App() {

  const [imageData,setImageData] = useState([]);

  useEffect(() => { // useEffect is how we schedule arbitary code to run at certain times of life in a component
    const fetchData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=rCiLxbpacIgUNvc3dJdaZaRgkJ1gYTvcEp8LGSzS`)
        .then(res => {
          console.log(res.data)
          setImageData(res.data)
        })
        .catch(err => {
          debugger;
        })
    }
    fetchData() // can wrap axios call in fetchData, but must invoke too!

    return () => {
      // not worth it (the cleanup) in this case, probably
    }
    

  }, []);

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}

      <Description description={imageData.explanation} date={imageData.date} copyright={imageData.copyright} url={imageData.url}/>
    </div>
  );
}




export default App;
