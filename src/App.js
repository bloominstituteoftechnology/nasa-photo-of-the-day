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
