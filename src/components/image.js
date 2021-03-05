
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/constants.js';

function NASAimage() {
  const [image, setImage] = useState();
  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(({ data }) => {
      setImage(data.url)
    })
    .catch(err => console.log(err));
  }, []);
  return (
    <div>
    <img class="img-fluid mx-auto d-block shadow-lg mb-3" alt="NASA pic of the day" width="500" height="500" src={ image } />
    </div>
  );

};

export default NASAimage;
