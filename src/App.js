import React, {useState, useEffect} from "react";
import "./App.css";
import Header from './Head';
import Body from './Body';
import axios from "axios";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState([]);
  const [explanation, setExplanation] = useState ([]);
  const [title, setTitle] = useState ([]);


  useEffect(() => {
    axios.get ('https://api.nasa.gov/planetary/apod?api_key=qB9nmHMUHqVtE07BKXKcnscg9XPTOFoxy0Birzgb&date=2021-06-22')
    .then(res => {
      console.log('it worked!!!!', res)
      setTitle(res.data.title)
      setPhoto(res.data.url)
      setExplanation(res.data.explanation)
      setDate(res.data.date)
    })
    .catch(err => console.log('error'))
  },[])
  // [] used to trigger useEffect once only
  return (
    <Container className ="nasa-blog">
      <Head>
        <Header title = {title} date = {date} />
      </Head>
      
      <Bod>
        <Body photo = {photo} explanation = {explanation}/>
      </Bod>
      
    </Container>
  );
}

const Container = styled.div`
background-color: #DCE1E3;
`
const Head = styled.div`
text-align: center;
padding: 15px;
`
const Bod = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
padding: 20px;
`



export default App;
