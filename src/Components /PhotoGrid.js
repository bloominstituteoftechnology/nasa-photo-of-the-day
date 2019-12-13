import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import { Container, Row} from 'reactstrap';



//It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass. Defining a styled component within the render method will thwart caching and  dratically slow down render speed and should be avoided



export default function PhotoGrid() {
    const [apod, setApod] = useState([])
    
    
    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=hploAUDCTwc4LsDZ9ZGj8dVKfUbrmnWe73WVIENq`)
        .then(response => {
            console.log(response.data)
            setApod(response.data)
        })
        .catch(error=> {
            console.log("data was not retrieved", error);
        })
    },[]);
    
    
    
    return (
       <Container>
            <Row>
                <PhotoCard 
                    title={apod.title}
                    explanation={apod.explanation}
                    imgUrl={apod.url}
                    date={apod.date}
                /> 
           </Row>
        </Container>

    );
}
