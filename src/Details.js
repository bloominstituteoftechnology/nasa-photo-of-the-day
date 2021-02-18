import React, { useState, useEffect } from "react";
import { API_CODE } from "./constants/index";
import axios from "axios";

export default function Details(props) {
    const { dataId} = props;
    const [details, setDetails] = useState([]);

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
      .get(`${API_CODE}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log(`📲 old dataId was ${details.url}. This is cleanup`);
    };
  }, [details.url]);

  return (
    <div className="container">
    
      {details && (
        <>
          <p>
           Published:  {details.date}  
          </p>
          <p>
            <i>Source</i>: {details.copyright}
          </p>
          <p>{details.explanation}</p>
     </>
      )}
      
    </div>
  );
}
