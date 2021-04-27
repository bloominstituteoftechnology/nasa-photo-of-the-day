import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Title from  './Title';
import Explanation from './Explanation'

const Photo = () => {

const [photo, setPhoto] = useState({});

useEffect(()=> {

    axios.get('https://api.nasa.gov/planetary/apod?api_key=4sijppZqRZrrYfi0ZSmVAKhCRKaq8aZqLBzzzh1e')

    .then (res =>{
        console.log(res)
        setPhoto(res.data)

    })
    .catch (err => {
        console.log(err)

    })
}, [], )

return (

<div>

<Title title = {photo.title}/>

<Explanation explanation = {photo.explanation}/>

<img src = {photo.url} alt = '' /> 


</div>

)


}

export default Photo