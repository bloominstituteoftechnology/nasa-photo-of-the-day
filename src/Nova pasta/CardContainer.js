import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function CardCont() {
  const [nasa, setNasa] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=fXECkPLRbIE6uIjWlJjJ5CEnbmgbCpPMfrfTZbTW'
      )
      .then(res => {
        console.log(res.data);
        setNasa(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cardcont">
      <Card
        title={nasa.title}
        imgUrl={nasa.hdurl}
        date={nasa.date}
        expl={nasa.explanation}
      />
    </div>
  );
}

export default CardCont;
