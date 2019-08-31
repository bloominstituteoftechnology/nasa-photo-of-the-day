import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import PhotoCard from './components/PhotoCard';
import { StyledH1 } from './components/Headers';
import "./components/Button.js";
import "./components/Headers.js";
import "./components/Story.js";
import "./App.css";


// ({}) === empty object. Will use the value of 'data' in the empty object. React is able to read the 'data' and run it. 

function App() {  
  const[data, setData] = useState({});
  const[date, setDate] = useState('2019-08-26');
  useEffect(() => {
    console.log('first render');
  
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
  .then(response => {
    console.log(response.data);
    setData(response.data)
      })
  }, [date]);

    // Use useEffect when we want to run some code, sometimes (conditionally). 
    // So the code won't run every time and we run out of our 'api' time.(Running an API is a 'side effect', modify some variable.) UseEffect takes a cb function as it's first argument (similar to setTimeout) and takes code to delay the execution on and then it takes as it's second argument, an array of data. Whenever the data changes, useEffect will run the cb function, when we want it to happen. An empty array [], the data will never change. The second time the function is ran, useEffect will see that nothing in the array changed. (The variables in the cb, that it depends on,may or may not change.) Inside of the array, it should include all the data we depend on. UseEffect helps us contain our communication with the server.
  console.log(date);
  return (
    <div className="App">
      <StyledH1>
        Welcome to NASA picture of the day!
      </StyledH1>
      {/* Uncomment for array api */}
      <PhotoCard title={data.title}
       url={data.url} 
       explanation={data.explanation}
       date={data.date}
      />
      {/* <div className='photo-card'> 
        {photo.map(data => {
          <PhotoCard title={data.title}
          url={data.url}
          explanation={data.explanation}
          date={data.date} />
        })}
      </div> */}

        <form>
        <label for='date'>Click Arrow to Select any date</label>
        <input id='date' onChange={(event) => 
          setDate(event.target.value)} type={'date'}>
          </input>
        </form>
    </div>
  );
}
// data with Photo, url, etc are being called and 'rendered' using useState({})
// useEffect is running only once after reading the empty array [], because of 0 index.
export default App;






// If you get banned from the nasa API 
// </p>
// {photo.map(data => ( <PhotoCard title={data.title}
// url = { data.url }
// explanation = { data.explanation }
// date = { data.date } />)}

// Ternary operator
// <p>
// {data
// ?
// <PhotoCard title={data.title}
  // url={data.url}
  // explanation={data.explanation}
  // date={data.date} />
// }