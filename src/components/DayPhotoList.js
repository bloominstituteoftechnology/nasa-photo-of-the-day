import Reach, {useState, useEffect} from 'react';
import DayPhoto from './DayPhoto';
import axios from 'axios';

export default function DayPhotoList (){
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=dA0WZJwegrMiHJToOmY4zEyPnrZUojzwJfGVaPXY')
        .then(response => {
            console.log(response.data);
        })
    })
}