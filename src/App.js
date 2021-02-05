import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import DatePicker from './components/date-picker/DatePicker';
import PictureDetails from './components/picture-details/PictureDetails';
import { BASE_URL, API_KEY } from './constants/index';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 50px;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #e4efe9, #93a5cf);
`;

function App() {
  const [pictureDetails, setPictureDetails] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const fetchPictureDetails = () => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${selectedDate}`)
    .then((response) => {
      console.log(response.data)
      setPictureDetails(response.data);
    })
    .catch((error) => console.log(error));
  }

  const setMaxDate = () => {
    // set maximum date on the date picker input so user can't select a date in the future
    let [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    day = day < 10 ? 0 + day : day;
    month = month < 10 ? 0 + month : month;
    const today = `${year}-${month}-${day}`;
    const datePicker = document.querySelector('.date-picker');
    datePicker.setAttribute("max", today);
  }

  useEffect(fetchPictureDetails, [selectedDate]);
  useEffect(setMaxDate, []);

  return (
    <StyledApp>
      <h1>Astronomy Picture of the Day</h1>
      <DatePicker setSelectedDate={setSelectedDate} />
      <PictureDetails pictureDetails={pictureDetails} />
    </StyledApp>
  );
}

export default App;
