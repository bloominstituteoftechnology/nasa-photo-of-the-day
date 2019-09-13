import React, { useEffect, useState } from "react";
import axios from "axios";
import IODCard from "./IODCard";
import { Container, Row } from "reactstrap";
// import styled from "styled-components"

// const AnotherWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

export default function PhotoList(){
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(resp => {
                const photo = resp.data;
                console.log("this is it", photo);
                setPhoto(photo);
            })
            .catch(error => {
                console.log("wooooow", error);
            });
    },[]);

    return (
        
        <Container>
            <Row>
                <IODCard
                    title= {photo.title}
                    picture={photo.url}
                    date={photo.date}
                    description={photo.explanation}
                />
            </Row>
        </Container>
        
    )
} 