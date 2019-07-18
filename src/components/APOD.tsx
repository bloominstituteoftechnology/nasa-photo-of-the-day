import React from 'react';
import './APOD.scss';

interface APODDataProps {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
interface APODProps {
  response: {
    data: APODDataProps;
  };
}
function APOD({ response }: APODProps) {
  const {
    explanation = '',
    media_type = '',
    title = 'Loading...',
    url = '',
  } = response !== undefined ? response.data : {};

  return (
    <div>
      <h1>{title}</h1>
      { media_type === 'image' ? <img src={url} alt="space stuff"/> : null }
      { explanation !== undefined ? <p>{explanation}</p> : null }
    </div>
  );
}

export default APOD;
