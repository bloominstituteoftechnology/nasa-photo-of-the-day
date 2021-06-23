import React from 'react';
import { useState, useEffect } from 'react'; 
import styled from 'styled-components'
import Navbar from "./Navbar"

const apiKey = process.env.REACT_APP_NASA_KEY;


export default function NasaPhoto(){
    
    const [photoData, setPhotoData] = useState(null);
    useEffect(() =>{
        fetchphoto();
        async function fetchphoto(){
           const res = await fetch(
               `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
           );
           
           const data = await res.json();
           setPhotoData(data);
           console.log(data)
        }
    }, []);

    const Para = styled.p`
        color: red;
        padding: 20px;
        
        
    `
    const DivPic = styled.div`
        display: flex;
        padding: 40px;
        margin: 0 auto;
        max-height: 100%;
    
    `

    const Mainpic = styled.img`
        display: flex;
        margin-left: 30%;
        max-height: 90vh;
    
    `
    const HeaderTit = styled.h1`
        justify-content: center;
        color: green;
        margin-left: 30%;

    
    `
    if (!photoData) return <div />;

    return (
        <>
        <Navbar />
        <div>
            {photoData.media_type === "image" ? (
            <DivPic>
            <Mainpic src={photoData.url} alt={photoData.title}  />
            </DivPic>
            ) : (
            <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
            />
            )}


            <div>
                <HeaderTit>{photoData.title}</HeaderTit>
                <Para>{photoData.date}</Para>
                <Para>{photoData.explanation}</Para>
            </div>

        
            
        </div>
        
        </>
    )
}