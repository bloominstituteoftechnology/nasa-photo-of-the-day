import React, { useState, useEffect } from "react";
import { API_CODE } from "./constants/index";
import axios from "axios";
import './styles.css'

export default function Details(props) {
    const [details, setDetails] = useState([]);

    useEffect(() => {
    axios
      .get(`${API_CODE}`)
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

  const style = {
    fontWeight: "bold",
    fontSize: "0.8rem"
  }

  return (
    <div className="details">
    
      {details && (
        <>
          <p>
           Published:  {details.date}  
          </p>
          <p>
            <span style={style}>Source: {details.copyright}
            </span>
          </p>
          <p>{details.explanation}</p>
     </>
      )}
      
    </div>
  );
}
