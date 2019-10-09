import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from './components/Header';
import Date from './components/Date';
import Image from './components/Image';
import Description from './components/Description';

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
      axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=albB1lx64EPE3qhswsmqlLEVNlj3Qigu6lXcxhEe`)
          .then(response => {
              console.log(response);
              setContent(response.data)
          })
          .catch(error => console.log(`There is an error: ${error}`));
  }, []);

  if(!content){
    return <h3>Loading...</h3>;
  }

  return (
    <div className="App">
      <Header title={content.title}/> 
      <Date date={content.date}/>
      <div className="desc_img_container">
        <Image url={content.url}/>
        <Description description={content.explanation}/>
      </div>     
    </div>
  );
}

export default App;
