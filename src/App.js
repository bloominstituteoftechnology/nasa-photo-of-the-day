// import React from "react";
// import "./App.css";
// import axios from 'axios';
// import Image from './Image.js';

// function App() {
//   return (
//     <div className="App">
//       <p>
//         Read through the instructions in the README.md file to build your NASA
//         app! Have fun <span role="img" aria-label='go!'>🚀</span>!
//       </p>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
 import axios from 'axios';
 import { BASE_URL, API_KEY } from '../constants/index';
 import "../App.css";
 // import { isTemplateElement } from "@babel/types";
 import Photo from './Photo';
 import Explanation from "./Explanation";
 import Header from './Header';
 import Calendar from './Calendar';

 function App() {
   const [data, setData] = useState([]);
   const [error, setError] = useState(null);

   let year = (new Date()).getFullYear();
   let month = (new Date()).getMonth();
   let day = (new Date()).getDate();
   let fullDate = `${year}-${month + 1}-${day}`


   useEffect(() => {
     axios.get(`${BASE_URL}?api_key=${API_KEY}`)
       .then(res => {
         setData(res.data)
       })
       .catch(err => {
         setError(`We're experiencing technical difficulties, please try again...`)
       })
   }, [])

   const dateSelect = input => {
     axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${input}`)
       .then(res => {
         setData(res.data)
       })
       .catch(err => {
         setError(`We're experiencing technical difficulties, please try again...`)
       })
   }

   return (
     <>
     <div className='App'>
       { error && <h1>{error}</h1> }
       <Calendar dateSelect={dateSelect} />
     </div>
     <div className="App">
         <Header copyright={data.copyright} date={data.date} title={data.title} />
     </div>
     <div className="App">
     { <Photo photo={data.url} /> }
     </div>
     <div className="App">
       { <Explanation explanation={data.explanation} /> }
     </div>
     </>
   )
 };

 export default App;
