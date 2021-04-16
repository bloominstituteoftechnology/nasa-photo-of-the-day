// STEP 1: IDENTIFY PARENT PAGE, APP.JS IS MY PARENT.
// STEP 2: THINK OF COMPONENTS, WHAT I NEED FOR MY PAGE, CREATE FILES IN COMPONENTS.
// STEP 3: IMPORT EVERYTHING TO THE PARENT. LINES 11 - 16
// STEP 4: useState, THINGS THAT WE CAN MANIPULATE, IN THIS SENSE, WE NEED AN ARRAY FOR DATA.  THUS NAMED DATA. LINE 21
// STEP 5: useEffect IS NECESSARY FOR IMPORTING API'S, AXIOS USED. LINE 23
// STEP 6: LINE 26 IS HOW WE ARE CALLING AND PUSHING DATA INTO OUR EMPTY ARRAY CREATED IN LINE 20.  
// STEP 7: RETURN ALL THE COMPONENTS WE HAVE CREATED. <componentName props={data.url}/> *ORDER SPECIFIC* LINES 42 - 46
// STEP 8: MOVE TO OUR COMPONENT THAT COMES FIRST, IN THIS INSTANCE IMAGE. STEP 9 IS IN 'image.js'

// BEGINNING OF STYLING, CSS IN JSX 
// STEP 1: IN THE TERMINAL, RUN ' npm install --save styled-components '

import React, {useState, useEffect} from "react";
import axios from 'axios';
import Image from './components/Image';
import Title from './components/Title';
import Description from './components/Description';
import Date from './components/Date';
import Copyright from './components/Copyright';
import "./App.css";


function App() {
  const [data, setData] = useState({})
  
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((results) => {
        setData(results.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <Image image={data.url}/>
      <Title title={data.title}/>
      <Description description={data.explanation}/>
      <Date date={data.date}/>
      <Copyright copyright={data.copyright}/>
    </div>
  );
}

export default App;
