import React, {useState, useEffect} from "react";
import './styles.css'
import axios from "axios";
import Details from './Details';
import { BASE_URL, API_KEY} from './constants/index';
import Header from './Header';
import Footer from './Footer';

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
    <div className="photo-frame">
      <div className="photo">
      <a href = {photo.url} >
        <img className="photo_img" src={photo.url} alt={photo.title} />
        </a>
        </div>
    </div>
  );

  return (
    <div>
    <Header />
    <div className="container">
      <div className="content">
      <h1>Astro Photo of the Day!</h1>
       <blockquote> 
         <h3>	{photo.title}:</h3>
        </blockquote>
        <div className="photo">
      {
        <Photo key={photo.id} info={photo} />
      }
      </div>
      {photo && (
        <Details data = {photo}  />
      )}
      </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
