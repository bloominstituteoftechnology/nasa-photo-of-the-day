import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";

const card={
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: '#8576cf'
}

const title={
  color: 'white',
  fontSize: '30px',
  padding: '10px'
}

const text={
  color: 'white',
  fontSize: '20px',
  padding: '10px'
}

const img={
  width: '800px',
  height: '600px',
  padding: '10px'

}


function App() {
  const [data, setData] = useState({})

  useEffect(()=>{
    const getData = () =>{
      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => 
        {
          setData(res.data)
        })
      .catch(err => {console.log(err)})
    }
    getData()
  },[])


return (
  <Card style={card}>
    <CardBody>
      <CardTitle style={title}>{data.title}</CardTitle>
      <CardText style={text}>{data.date}</CardText>
      <CardImg  src={data.url} alt='nasa opad' style={img}/>
      <CardText style={text}>{data.explanation}</CardText>
    </CardBody>
  </Card>
)
}

export default App;
