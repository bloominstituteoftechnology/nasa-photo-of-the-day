import React, { useState, useEffect } from "react";
// import { API_CODE } from './components/Url';
import axios from "axios";



 function Details(props) {
    const [details, setDetails] = useState([]);

    useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
        setDetails(res.data);
        console.log(details.url)
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log(`📲 old dataId was ${details.url}. This is cleanup`);
    };
  }, [details.url]);


  return (
    <Details>
    
      {details && (
        <>
          <p>
           Published:  {details.date}  
          </p>
          <p>
            <span>Source: {details.copyright}
            </span>
          </p>
          <p>{details.explanation}</p>
     </>
      )}
      
    </Details>
  );
}
export default Details