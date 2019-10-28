import React from "react";
import styled from "styled-components";
import {PhotoOfTheDay, Image, PictureTitle, ParagraphDescription} from "./CardStyles.js";

function PhotoCard (props) {

    // Display a loading message while the data is fetching
    if (!props.url) return <h3>Loading...</h3>;
    
       
    return (
        <PhotoOfTheDay>          
            <PictureTitle>{props.title}</PictureTitle>          
            
                <Image alt = "nasa image of the day" src = {props.url}/>            

            <ParagraphDescription>
                {props.explanation}
            </ParagraphDescription>

        </PhotoOfTheDay>
    );
}

export default PhotoCard;