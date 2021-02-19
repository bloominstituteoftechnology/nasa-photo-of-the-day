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
const Details = styled.div`
    padding: 12px 25px 12px 25px; 
    `;

  const Span = styled.span`
  font-weight: bold;
  font-size: 0.8rem;
  `;

  const P = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 350;
    word-spacing: 3px;
    text-align: justify
  `;
  return (
    <Details>
    
      {details && (
        <>
          <P>
           Published:  {details.date}  
          </P>
          <P>
            <Span>Source: {details.copyright}
            </Span>
          </P>
          <P>{details.explanation}</P>
     </>
      )}
      
    </Details>
  );
}
