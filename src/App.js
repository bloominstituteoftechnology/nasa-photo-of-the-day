import React, { useState, useEffect } from "react";
import axios from 'axios';
import PhotoCard from './components/PhotoCard';
// import App.test from './App.test'
import "./App.css";
// ({}) === empty object. Will use the value of 'data' in the empty object. React is able to read the 'data' and run it. 
function App() {  
  const[data, setData] = useState({});
  useEffect(() => {
    console.log('first render');
  
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(response => {
    console.log(response.data);
    setData(response.data)
      })
  }, []);
    // Use useEffect when we want to run some code, sometimes (conditionally). 
    // So the code won't run every time and we run out of our 'api' time.(Running an API is a 'side effect', modify some variable.) UseEffect takes a cb function as it's first argument (similar to setTimeout) and takes code to delay the execution on and then it takes as it's second argument, an array of data. Whenever the data changes, useEffect will run the cb function, when we want it to happen. An empty array [], the data will never change. The second time the function is ran, useEffect will see that nothing in the array changed. (The variables in the cb, that it depends on, may or may not change.) Inside of the array, it should include all the data we depend on. UseEffect helps us contain our communication with the server.

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoCard title={data.title}
       url={data.url} 
       explanation={data.explanation}
       date={data.date} />
    </div>
  );
}
// data with Photo, url, etc are being called and 'rendered' using useState({})
// useEffect is running only once after reading the empty array [].
export default App;
