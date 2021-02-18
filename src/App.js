import React, {useState, useEffect} from "react";
import './styles.less'
import axios from "axios";
import Details from './Details';
import { BASE_URL, API_KEY, API_CODE} from './constants/index';


function App() {
  const [photo, setPhoto] = useState([]);
  const [dataId, setDataId] = useState(null);

  const openDetails = (id) => {
    setDataId(id);
  };
  const closeDetails = () => {
    setDataId(null);
  };

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
    fetchPhoto ();
   
  }, []);

  const Photo = (props) => (
    <div className="friend">
      <img src={API_CODE} alt={photo.title} />
      <button onClick={() => openDetails(photo.id)}>See details</button>
    </div>
  );

  return (
    <div className="container">
      {
        // If the initial value of `friends` state weren't an empty array,
        // this would crash due to invoking `map` method on non-array.
        // We'd need a guard against this.
         <Photo key={photo.id} info={photo} />
      }
      {dataId && (
        <Details friendId={dataId} next={closeDetails} />
      )}
    </div>
  );
}

export default App;
