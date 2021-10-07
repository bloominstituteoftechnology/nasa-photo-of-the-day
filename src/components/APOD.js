import React, { useEffect, useState }  from "react";
import axios from "axios";



export default function APOD() {
const [photoData, setPhotoData] = useState(null);

useEffect ( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=IDEtawH811i70Ei0hoJRqffG5gbHLRjrwk9ytJ8O')
    .then( res => {
        console.log(res);
        console.log(res.data)
        setPhotoData(res.data);
    }).catch(err => console.error(err));
},[])

    console.log(photoData);
    return ( 
        photoData &&
    <div className = "NASACard">
            <div className ="DailyNasaPost">
            <h2>{photoData.title}</h2>
            <img src = {photoData.hdurl}  alt = {photoData.title} className = "NASAImage"/>
            <p>{photoData.explanation}</p>
            <p>Copyright: {photoData.copyright}</p>
            </div>
    </div>
    )


}


// useEffect(() => {
//     // console.log(`${BASE_URL}/friends?api_key=${API_KEY}`)
//     axios.get(`${BASE_URL}/friends?api_key=${API_KEY}`)
//       .then(res => {
//         setFriends(res.data);
//       }).catch(err => console.error(err));
//   }, [])