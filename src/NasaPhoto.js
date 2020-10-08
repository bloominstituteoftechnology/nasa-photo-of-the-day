import React, { useState, useEffect } from "react";
import "./index.css";
import styled from 'styled-components'
import theme from "./theme"

const apiKey = process.env.REACT_APP_NASA_KEY;

const StyledNasaPhoto = styled.div`
background-color: ${tm => tm.theme.secondaryBackgroundColor};
color: ${tm => tm.theme.primaryTextColor};
`;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null)

    useEffect(() => {
        fetchPhoto() // invoke fetchPhoto() / If I remove this is will say loading...

        async function fetchPhoto() { // creates async function fetchPhoto()
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}` // fetching API
            )
            const data = await res.json() // converting API from objects to string
            setPhotoData(data) // passing data into setPhotoData
            console.log(data) // checking to make sure data is clean and readable
        }
    }, [])

    if(!photoData) return <h3>Loading...</h3> // if rendering of fetchPhoto() or photoData is too slow or fails this will create a loading... replacement instead of throwing error

    return (
        <StyledNasaPhoto>
        <div>
            {photoData.media_type === "image" ? (
            <img                                        // image
            src={photoData.url}
            alt={photoData.title}    // ternary to return an image or video based on photoData media_type
            /> ) : (
                <iframe                                 // video
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
                <h1>{photoData.title}</h1>
                <h2>Copyright: {photoData.copyright}</h2>
                <h3>Date: {photoData.date}</h3>
                <p>About this image:  {photoData.explanation}</p>
            </div>
        </div>
        </StyledNasaPhoto>
    )       // ^^^ returns photoData content in JSX ^^^
}

