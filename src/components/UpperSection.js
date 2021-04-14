import React from 'react';
import Pictures from "./Pictures";

export default function UpperSection(props){
    const { pictures } = props;
    return(
        <section className = "upper-section">
            <div className = "header">USING NASA'S APOD API</div>
            <div className = "nasa-explanation-container">
            <   div className = "nasa-explanation">
                    <h1>WHAT THIS SITE IS</h1>
                    <p>Everyday, NASA realeases a new image through their "Astronomy Picture of the Day" API. <a href = 'https://api.nasa.gov/#apod' target = 'blank'><span>See their explanation here</span></a> The API returns feedback through a data object that has keys containing the picture itself, the date it was taken, an explanation of what the picture is, and much more. This site's purpose is to take the information given from NASA's API and display it. Nothing aside from the header, and this paragraph are hard coded, and if you were to open this website on any other day all the information below would be different.</p>
                </div>
                {<Pictures pictures = {pictures}/>}
            </div>
        </section>
        );
}