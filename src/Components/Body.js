import React, { useEffect ,useState } from "react";
import axios from 'axios'
import styled from 'styled-components';
import earth from '../images/earth.jpg';

const Styled = styled.div `
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
}
  h2, h3, p {
    margin: 1em;
    color white;
  }
`

function Body ({ showBody, setShowBody }) {
    const [ testAPI, setTestAPI ] = useState([]);

    const fetchAPI = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=nltn97NF7rEQRQeQ5w9J2wPzd24R3wwbT0rXeLM2')
        .then(res => {
          console.log(res.data)
          setTestAPI(res.data)
        })
  
        .catch(error => console.log(error))
    }
    
    useEffect(fetchAPI, []);
  
    
    
    return (
    <>
      {showBody ?  
        <Styled className="container" > 
          <div className="bodyWrapper" showBody={showBody} >
            <div className="bodyContent">
              <img className="Img" src={testAPI.url} />
              <h2>{testAPI.title}</h2>
              <h3>{testAPI.date}</h3>
              <p>{testAPI.explanation}</p>
            </div>
          </div>
        </Styled>
      : null } </>
    )
}

export default Body;