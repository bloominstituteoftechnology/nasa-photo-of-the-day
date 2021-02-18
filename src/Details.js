import React, { useState, useEffect } from "react";
import { API_CODE } from "./constants/index";
import axios from "axios";
import './styles.less'

export default function Details(props) {
    const [details, setDetails] = useState([]);

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

  console.log(details)
  console.log(details.url)
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
