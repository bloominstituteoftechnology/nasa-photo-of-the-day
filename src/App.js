import React, {useState, useEffect} from "react";
import "./App.css";
import { API_URL, API_KEY} from './configuration/config';
import axios from 'axios';
import Picture from './Picture';
import Explanation from './Explanation';

function App() {
  const [picData, setPicData] = useState({});

  useEffect(() => {
    const getPicData = () => {
      axios.get(`${API_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res);
        setPicData({...res.data});
      })
      .catch(err => {
        debugger;
      });
    };
    getPicData();

  }, []);

  return (
    <div className="App">
      Cynthia's Astronomy Picture of the Day
      <Picture picData={picData}/>
      <Explanation explanation={picData.explanation}/>
      

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
