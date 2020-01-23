import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaImagecard from "./NasaImagecard";
import styled from "styled-components";
// import moment from "moment";
// import DatePicker from "react-date-picker";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ModalExample from "../components/ReactStrap"

export default function NasaData() {
  //   const [nasaDataArray, setNasaDataArray] = useState([]);
  const [newDate, setNewDate] = useState("");

  const [nasaData, setNasaData] = useState({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: ""
  });

  useEffect(() => {
    console.log("nasa component mounted");
    axios
      .get(
        //    "https://api.nasa.gov/planetary/apod?api_key=OzNA7KGSQNWftbQgC4w9TH8ZmGkFCBO1tqhVLJAY&date=2020-01-20"
        `https://api.nasa.gov/planetary/apod?api_key=OzNA7KGSQNWftbQgC4w9TH8ZmGkFCBO1tqhVLJAY&date=${newDate}`
      )
      .then(response => {
        console.log(response);
        console.log(response.data);
        return setNasaData(response.data);
      })
      .catch(error => {
        console.log("error: ", error);
      }, []);
  }, [newDate]);
  if (!nasaData.hdurl) {
    return (
      <div>
        <h3>Loading...</h3>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  } else {
    return (
      <DivStyled>
        <form >
          <input
            type="date"
            className="new-date-input"
            placeholder="YYYY-MM-DD"
            onChange={event => {
              setNewDate(event.target.value);
            }}
          />
                </form>
                <ModalExample buttonLabel="pop-up world"/>
        <NasaImagecard nasaData={nasaData} />
      </DivStyled>
    );
  }
}
const DivStyled = styled.div`
  background-image: url(https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_1280.jpg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-repeat: no-repeat;
  height: 100%;
  border-radius: 4px;
  /* box-shadow: 2px 4px 15px 33px rgba(59, 14, 59, 0.47); */

`;
