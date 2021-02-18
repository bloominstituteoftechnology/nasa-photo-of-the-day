import React, {useState, useEffect} from "react";
import './styles.less'
import axios from "axios";
//import Details from './Details';
import { BASE_URL, API_KEY } from "../constants";


function App() {
  const [photo, setPhoto] = useState([]);
  const [dataId, setDataId] = useState(null);

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
  }, []);


  return (
    <div className="container">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
