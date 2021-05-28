
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";
import header from './components/header'

import details from './components/details'
function App() {
const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")       
     .then(res => {
       console.log(res.data) 

       setData(res.data)
        })
     .catch((err) => {
       debugger
       })
 }, []);


  return (
    <div className="App">

      <header />
     
      <details data={data}/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from  'React';
	import "./App.css";
	import index from  './index'
	import Gallery from './Gallery'
	import Header from './Header'
	import Detail from './Detail'
	import axios from 'axios'
	

	function App() {
	  const [data, setData] = useState([])
	

	

	  useEffect(()=> {
	    axios
	    .get("https://apod.nasa.gov/apod/image/2105/AgCar_HubbleSchmidt_2212.jpg")
	    .then(res => {
	      setData(res.data)
	      console.log(res.data)
	    })
	    .catch(err => {
	      console.log(err)
	    })
	  },[])
	

	

	

	  return (
	    <div className="App">
	      
	      <Header headerData={data}/>
	      <Gallery imgData={data}/>
	      <Detail info={data}/>
	

	    </div>
	  );
	}

