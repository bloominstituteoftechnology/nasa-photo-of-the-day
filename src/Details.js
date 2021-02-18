import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "./constants/index";
import axios from "axios";

export default function Details(props) {
    const { dataId, close } = props;
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const handleClick = (evt) => {
          // console.log(`Here is a random number: ${Math.random()}`);
        };
        document.addEventListener("click", handleClick);
        return () => {
          console.log(`👻 CLEANING UP SILLY CLICK LISTENER`);
          document.removeEventListener("click", handleClick);
        };
      }, []);


    useEffect(() => {
    axios
      .get(`${BASE_URL}/friends/${dataId}?api_key=${API_KEY}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log(`📲 old dataId was ${dataId}. This is cleanup`);
    };
  }, [dataId]);

  return (
    <div className="container">
      <h2>{details.title}:</h2>
      {details && (
        <>
          <p>
           Published:  {details.date}  
          </p>
          <p>
            Copyright by: {details.copyright}
          </p>
          <p>{details.explanation}</p>
     </>
      )}
      <button onClick={close}>Close</button>
    </div>
  );
}
