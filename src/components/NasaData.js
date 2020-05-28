import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

const NasaData = () => {
  const [title, setTitle] = useState();
  const [photoUrl, setPhotoUrl] = useState();
  const [date, setDate] = useState();
  const [copyright, setCopyright] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=yR8bXnl8T0CB98XzKNFFFstbwbq4RnsWHS5xMy8p`)
      .then(response => {
        console.log(response.data)
        setTitle(response.data.title);
        setPhotoUrl(response.data.url);
        setDate(response.data.date);
        setCopyright(response.data.copyright);
        setDescription(response.data.explanation);
      })
      .catch(err => console.log(err.message))
  }, []);

  return(
    <>
      <h1>NASA Photo of the Day for {date}</h1>
      <PhotoCard
        title={title}
        photoUrl={photoUrl}
        copyright={copyright}
        description={description}
      />   
    </>
  )
};

export default NasaData;
