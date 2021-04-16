import React, {useState, useEffect} from "react";
import axios from "axios";
import Details from './Details';
import { BASE_URL, API_KEY} from './constants/index';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';


function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchPhoto = () => {
      axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then((res) => {
          setPhoto(res.data); 
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPhoto();
   
  }, [photo.id]);

  const PhotoFrame = styled.div`
    padding: 10px;
  `;

  const PhotoImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 93%;
    box-shadow: 0px 1px 6px -2px slategray;
    border: 2px solid #94cbe2;
    padding: 10px;
  `;

  const Photo = (props) => (
    <PhotoFrame>
      <a href = {photo.url} >
        <PhotoImg src={photo.url} alt={photo.title} />
        </a>
    </PhotoFrame>
  );

  const Container = styled.div`
    width:90%;
    margin: 0 auto;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    background-color: #78e08f;
  `;
 
 const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const H2 = styled.h2`
  
    font-family:  sans-serif;
    font-weight: #636e72;
    color: #0984e3 ;
    background-color: #ffeaa7;
`;

const H3 = styled.h3`

    font-family: sans-serif;
    font-weight: bold;
    padding: 0 25px 0 25px;
    text-align: center;
  `;

const Blockquote = styled.blockquote`
    border: 1px solid slategray;
    width: 50%;
    background-color: #e17055;
    font-weight: bold;
    font-size: 1rem;
`;

const Styled = styled.div`
  color: red;
`


  return (
    <div>
    <Header />
    <br></br>
    <Container>
      <Content>
      <H2>Astro Photo of the Day!</H2>
      <Blockquote> 
         <H3>	{photo.title}:</H3>
      </Blockquote>
      {
        <Photo key={photo.id} info={photo} />
      }

      {photo && (
        <Details data = {photo}  />
      )}
      </Content>
        </Container>
        <br></br>
        <Footer />
    </div>
  );
}

export default App;