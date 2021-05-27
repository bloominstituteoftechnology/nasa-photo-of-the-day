import React, { useState, useEffect } from 'react';

export default function NasaPhoto(){
 const [photoData, setPhotodata] = useState(null);

  useEffect(() => {
      fetchPhoto();

      async function fetchPhoto() {
          const res = await fetch(
              'https://api.nasa.gov/planetary/apod?api_key=NoLBFe1QSjdNW4Ehr37gKtwXOygmHurwSuJhJHcd'
          );
          const data = await res.json();
          setPhotodata(data);
      }
  }, []);
  if(!photoData) return <div />;


  return (
    <div>
        <img 
            src={photoData.url} alt={photoData.title} />
    
      <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
      </div>
    </div>
)

}