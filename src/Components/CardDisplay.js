import React, { useEffect, useState } from "react";
 import axios from "axios";
 import NasaCard from "./NasaCard";


 export default function CardDisplay() {
  const [cardInfo, setCardInfo] = useState([]);



  useEffect(() => {
    axios
    .get(
      'https://api.nasa.gov/planetary/apod?api_key=Rj04ZLzDBooS9mgpGMQxFTS7WCXpHVfWl7nboSQJ'
    )
    .then(response => {
        const cardInfo = response.data;
        (console.log(response))
        setCardInfo([cardInfo]);
    })
    .catch(error => {
        console.log("Sorry, you've got an error!", error);
    });
}, []);

   return (
      <div className="container">
          <div className="entry">
              {cardInfo.map(photo => {
                  return ( 
                      <NasaCard 
                          copyright={photo.copyright}
                          date={photo.date}
                          title={photo.title}
                          imgUrl={photo.url}
                          explanation={photo.explanation}
                      />
                  );
              })}
          </div>
      </div>
  );
}