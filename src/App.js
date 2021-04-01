import React, {useEffect , useState} from "react";
import axios from "axios";
import "./App.css";	import "./App.css";
import styled from 'styled-components';
import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"
import "./App.css";



const Styled = styled.div `


`




function App() {
  const [apod, setApod] = useState([])
  useEffect(() => {
    const data = axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => {
      console.log(response)
      setApod(response.data)
    })
      .catch((error) =>{
      console.log("APOD GET HAS FAILED!", error)
      })
      console.log(data)
  },[])

  if (!apod.data) {
     return (
  <div class="App">
    <Styled>
    <Header date={apod.date} />
    <Body 
      key={apod.id}
      title={apod.title}
      explanation={apod.explanation}
      url={apod.url}
      copyright={apod.copyright}
       />
        <Footer date={apod.date} title={apod.title}/>
        </Styled>
  </div>
  )}
}
export default App;