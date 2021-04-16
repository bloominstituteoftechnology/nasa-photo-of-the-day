import React, { useState, useEffect } from "react";
import { API_CODE } from "./constants/index";
import axios from "axios";
import styled from 'styled-components';


export default function Details(props) {
    const [details, setDetails] = useState([]);

    useEffect(() => {
    axios
      .get(`${API_CODE}`)
      .then((res) => {
        setDetails(res.data);
        console.log(details);
        console.log("sssss", details.hdurl)
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("somenting",details);
    };
  }, [details.url]);

  // const style = {
  //   fontWeight: "bold",
  //   fontSize: "0.8rem"
  // }
const Details = styled.div`
    padding: 12px 25px 12px 25px; 
    color: black;
    `;

  const Span = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  `;

  const Ptag = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 350;
    word-spacing: 3px;
    text-align: justify;
    font-size: 15.rem
  `;
  return (
    <Details>
    
      {details && (
        <>
          <Ptag>
           Published:  {details.date}  
          </Ptag>
          
            <Span>Source: {details.copyright}
            </Span>
          
          <Ptag>{details.explanation}</Ptag>
     </>
      )}
      
    
    </Details>
  );
}