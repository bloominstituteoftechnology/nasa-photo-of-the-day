import React, {useEffect, useState} from 'react'
import PhotoCard from './PhotoCard'
import Axios from 'axios'






const Photo = () => {
        const [photoData, setPhotoData] = useState({})
        const [query, setQuery] = useState("?api_key=vvQ5FCkIRzIrzZAAfcv5fWLm8tYdk2DJm1yA0NBf&&date=2019-06-10")
    
        useEffect(() => {
            const fetchData = () => {
                Axios.get('https://api.nasa.gov/planetary/apod' + query)
          .then(res => {
              console.log(res.data)
              setPhotoData(res.data)
              
          })
          
          .catch(err => console.log(err));

            }
            
        fetchData();
      },[]);

      console.log(photoData)


      if (!photoData) {
      return <h2>Loading.....</h2>
    } else{
        return(
            <div>   
             <PhotoCard date={photoData.date} exp={photoData.explanation} image={photoData.hdurl} title={photoData.title}/>     
            </div>
        )

    }
    


}

export default Photo