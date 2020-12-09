import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";


export default function App() {
const [photoObj, setPhotoObj] = useState('');
// const [date, setDate] = useState('');
// const [upvotes, setUpvotes] = useState(0);

useEffect(() => {
  const fetchPhotoOfDay = () => {
    axios.
    get(URL = 'https://api.nasa.gov/planetary/apod?api_key=wDhtM0iiz4v9puJ8o0dmffW2hvx6W724caHOcazZ')
    .then((res) => {
      setPhotoObj(res.data)
      console.log(res.data)
      return res.data;
    }).catch( (err) => {
      console.log(err);
    }

    )
  }
  fetchPhotoOfDay();
}, []);



// const upvotePhoto = photoId => {
//  setUpvotes ( photoId.upvotes + 1 )
// };

  return (
    <div className="App">

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header date = {photoObj.date}/>
      <Photo />
      <PhotoInfo />
    </div>
  );
}


