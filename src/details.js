import React, {useState, useEffect} from 'react';
import axios from 'axios'


const Details = props => {

  // const [details, setDetails] = useState(null)

  // useEffect(() => {
  //   axios.get(`https://api.nasa.gov/planetary/apod?count=3&api_key=o5nP3CqAEStW8O13S9a8TdN9jWmNaaQFhiks7Wbi`)
  //     .then(res => {
  //       console.log(res);
  //       console.log("Details");
  //       setDetails(res.data);
  //     })
  //     .catch(err => console.error(err))
  // }, [props.photoDate])



  return (
      <div>
        <h2>Details of Photo taken {props.photoDate}:</h2>
        {/* <h2>Details of Photo taken {props}:</h2> */}
        {props.photos.map(photo => {
          if (photo.date === props.photoDate) {
            console.log("photo", photo);
            console.log("photo explanation", photo.explanation);
            return <p key={photo.date}>{photo.explanation}</p>
          }

        })}
      {
        <>
        </>
      }
        {/* <button onClick={props.closeDetails()}>Close</button> */}
      </div>
  )
}

export default Details;