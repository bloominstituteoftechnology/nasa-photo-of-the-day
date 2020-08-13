import React, {useState} from "react";
import "./App.css";

import Images from './Components/Image'

import ExplanationText from './Components/Explanation'


function App() {
  
  const [query, setQuery] = useState('');

  
  
  
  return (
    <div className ="con">
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <h1>Astronomy Picture of the Day</h1>
      <h2>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</h2>
      <Images data={query}  />
    
    
     <ExplanationText data={query} />
    </div>
     
    
  );
}

export default App;
