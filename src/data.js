import React, { useState, useEffect } from "react";
import axios from 'axios';
import StyledContent from './styles';
import CardContainer from './containers';






function NasaApi() {
    const [photos, setPhotos] = useState([])



    

    useEffect(() => {
        axios.all([
        axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=faHZawcTjQQrLRXilzcZEYJDOU87wLPSehtNpb2W&date=2020-03-05 "
        )
    ])


    .then(axios((...firstresponse) =>{
        console.log(firstresponse.data);
        setPhotos(firstresponse.data);
        
      }))

      .catch(err => {
        console.log(err);
      });
  }, [])

   
return (
    <>
    <StyledContent>
    <CardContainer>
        data={photos}
    </CardContainer>


    </StyledContent>
    
    
</>
)



}

export default NasaApi;