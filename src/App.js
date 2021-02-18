import React, {useState, useEffect} from "react";
import './styles.less'
import axios from "axios";
import Details from './Details';
import { BASE_URL, API_KEY} from './constants/index';
import Header from './Header'

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

  const Photo = (props) => (
    <div className="friend">
      <a href = {photo.url} >
        <img src={photo.url} alt={photo.title} />
        </a>
    </div>
  );

  return (
    <div className="container">
      <Header />
      <h1>Astro Photo of the Day!</h1>
        <h2>{photo.title}:</h2>
      {
        
         <Photo key={photo.id} info={photo} />
      }
      {photo && (
        <Details data = {photo}  />
      )}
    </div>
  );
}

export default App;
