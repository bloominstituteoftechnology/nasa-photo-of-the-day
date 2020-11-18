import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js'

function App() {
  const [data, setData] = useState('');
  useEffect(() => {
		axios.get(
			'https://api.nasa.gov/planetary/apod?api_key=JcscI1lYExVXYgatImbIRf0G728iv6lXTqNeEqge&date=2016-12-18'
		)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => console.log('Error', error));
	}, []);
  return (
  <div>
  <Header title={data.title} />
  <Main/>
  <Footer/>
  </div>
  );
}

export default App;
