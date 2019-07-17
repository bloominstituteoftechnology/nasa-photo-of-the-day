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
  data: APODDataProps;
}
function APOD({ data }: APODProps) {
  const { explanation, media_type, title, url } = data;

  return (
    <div>
      <h1>{title}</h1>
      { media_type === 'image' ? <img src={url} alt="space stuff"/> : null }
      { explanation !== undefined ? <p>{explanation}</p> : null }
    </div>
  );
}

export default APOD;
