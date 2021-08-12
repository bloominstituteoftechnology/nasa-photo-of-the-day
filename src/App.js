import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import "./App.css";

import axios from 'axios'

import Footer from './Components/Footer'
import Header from './Components/Header'
import Body from './Components/Body'

const StyledApp = styled.div`
  width: 100%;
  text-align: center;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  color: ${props => props.theme.light};
  background-color: ${props => props.theme.prime} ;
`

function App() {
  const [nasaData, setNasaData] = useState([])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=qDnHo3LTo5PXbCJtStPkNKPo82WWeTm9v5ASG43G`)
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  if(!nasaData.url) return <h3>loading</h3>
  // async function getDetails(){
    //   try{
    //     const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=qDnHo3LTo5PXbCJtStPkNKPo82WWeTm9v5ASG43G`)
    //     console.log(res.data)
    //     setNasaData(res.data)
    //   }catch (err){
    //     console.log(err)
    //   }
    // }}, [])
  return (
    <StyledApp>
      
      <Header nasaData = {nasaData}/>
      <Body nasaData = {nasaData}/>
      <Footer nasaData = {nasaData}/>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      
    </StyledApp>
  );
}

export default App;
