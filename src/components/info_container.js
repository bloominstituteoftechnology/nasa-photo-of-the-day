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
    <div class="mr-5 ml-5">
    <h2 class="text-center">{ title }</h2>
    <p class="text-center font-weight-bold">{ date }</p>
    <p class="text-center mr-5 ml-5 text-secondary">{ info }</p>
    </div>
  );
}

export default InfoContainer;
