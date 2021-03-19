import React, {useState, useEffect} from "react";    // import and 
import axios from 'axios'
import Img from './Components/Image'
import Copyright from './Components/Copyright'
import DateImg from './Components/Date'
import Summary from './Components/Summary'
import Title from './Components/Title'
import "./App.css";



// declare the name of the Component and invoke it
function App() {
  const [data, setData] = useState({})   // data is the declaration of an empty object that will be filled with the information from the API request below, and the master App Component will return the invocations of other components below... setData changes what is inside data, once it is fetched from the API, or if there is an event. 
  
const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=1XcrC3xroozQArT3QJTKfIW0acN4yfDqhwHVqWZm'
// below is the 'axios call' to fetch the API with .get - .then, it will respond, by binding the Object Keys recieved from the API, to the setData Object.
  useEffect(() => {  // declare and invoke useEffect, which is a function
    axios.get(`${baseURL}`)  // API request from axios
      .then((res) => {   // once the API is recieved, respond with the function of setData's.data object
        setData(res.data)
        console.log(res.data)  // to show the object's keys and values to use/access throughout your work
      })
      .catch( err => {  // this is added purely to catch an error, if there is one, so the Human knows. 
        console.log(err);
      })
  }, [])

  // below is the return of all the components linked to this App. The invocations are in <JSX /> form, and must declare the prop needed =equal to= the API Keys' Value you want to use. 

  // all of the components need to be inside an <>empty</> div so that all of the components are returned inside on div itself, the App's output MUST be ONE thing. It can only return ONE THING.

  //    🌸 SYNTAX  STRUCTURE 🌸   //
  // <Summary summary = {data.explanation}/>
  // JSX Component
  return (
    <div className = "App">
    <Title title = {data.title}/>
    <Img image = {data.url}/>
    <DateImg date = {data.date}/>
    <Summary summary = {data.explanation}/>
    <Copyright copyright = {data.copyright}/>
    </div>
  );
}

export default App;
