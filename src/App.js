import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import styled from 'styled-components'

const StyledCard = styled.div`
h3 {
  color: ${p => p.theme.secondaryColor};
}

.photoCard {
  display: flex;
}

.header {
  text-align: center;
  background-color: ${p => p.theme.primaryColor};
  padding-top: 3%;
  padding-bottom: 2%;
  font-size: 1.5rem;
}

img {
max-width: 100%;
}

.bio {
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
`

 function App() {
  const [card, setCard] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=1xrOvfLIDv2LCQe3ZdTp9pAknhILnmlfcFIx0lRZ')
    .then((resp) =>{
      setCard(resp.data)
    })
  }, [])
  return (
    <StyledCard className = 'photoCard'>
<div className="header">      
<h3 className ='title'>{card.title}</h3>
<h3 className = 'date'>{card.date}</h3>
</div>
<img className = 'image' src={card.hdurl} alt="picture of stars"></img>
<div className="bio"><p>{card.explanation}</p>
<p className="copyright">{card.copyright}</p>
</div>
    </StyledCard>

  )
 }

export default App;
