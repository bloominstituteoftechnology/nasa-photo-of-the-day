import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/constants.js';
import axios from 'axios';


function InfoContainer() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [info, setInfo] = useState('');
  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(({ data }) => {
      setTitle(data.title);
      setDate(data.date);
      setInfo(data.explanation);
    });
  });
  return (
    <div>
    <h2>{ title }</h2>
    <p>{ date }</p>
    <p>{ info }</p>
    </div>
  );
}

export default InfoContainer;
