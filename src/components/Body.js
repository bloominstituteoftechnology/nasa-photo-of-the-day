import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import Head from "./Head";

const MainBody = styled.div`
  background: black;
  width: 80%;
  margin: 0 auto;
`;



function Body() {
    const [nasaImg, setImg] = useState(0);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const nasaData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=LNPoBywgSDLGE27u4IKuzb2ocXxz3peGPbtVxz44')
          console.log(nasaData);
          setImg(nasaData.data);
        }
        catch (err) {
          console.log(err);
        }
      }
      fetchData()
    }, [])

    

    return (
        <MainBody>
            
            <Head />

        </MainBody>    
      
    );
}
  
  export default Body;