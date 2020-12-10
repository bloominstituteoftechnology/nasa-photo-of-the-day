import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Photo from "./components/Photo/Photo"
import PhotoInfo from "./components/PhotoInfo/PhotoInfo"
import Header from "./components/Header/Header"




export default function App() {
const [photoObj, setPhotoObj] = useState('');
const [date, setDate] = useState('');
const [photo, setPhoto] = useState('')
const [info, setInfo] = useState('')


useEffect(() => {
  const fetchPhotoOfDay = () => {
    axios.
    get(URL = 'https://api.nasa.gov/planetary/apod?api_key=wDhtM0iiz4v9puJ8o0dmffW2hvx6W724caHOcazZ&date=2020-12-08')
    .then((res) => {
      setPhotoObj( res.data)
      setPhoto( res.data.url );
      setDate( res.data.date );
      setInfo ( res.data.explanation)
    }).catch( (err) => {
      console.log(err);
    }

    )
  }
  fetchPhotoOfDay();
}, []);

console.log(photoObj)


// const upvotePhoto = photoId => {
//  setUpvotes ( photoId.upvotes + 1 )
// };

  return (
    <div className="App">

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Header date = {date}/>
      <Photo photo = {photo}/>
      {/* <PhotoList /> */}
      <PhotoInfo info = {info} />
    </div>
  );
}


