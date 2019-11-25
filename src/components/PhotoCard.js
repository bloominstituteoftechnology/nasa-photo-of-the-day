import React from "react";
import styled from "styled-components";
import {PhotoOfTheDay, InnerContainer, PhotoAndCalendar, ParagraphDiv, /*Image*/ PictureTitle, ParagraphDescription} from "./CardStyles.js";
import { Tab, Menu, Icon, Card, List, Image } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 

function PhotoCard (props) {

    // Display a loading message while the data is fetching
    if (!props.url) return <h3>Loading...</h3>;
     
       
    return (
        <InnerContainer>  
            <Segment raised>

            <PhotoOfTheDay>  

                

                <PictureTitle>{props.title}</PictureTitle>   

                <PhotoAndCalendar>                           
                
                    <Image alt = "nasa image of the day" src = {props.url}/>    

                </PhotoAndCalendar>              

            </PhotoOfTheDay>

            <ParagraphDiv>      

                <ParagraphDescription>
                    {props.explanation}
                </ParagraphDescription>

            </ParagraphDiv>  

            </Segment>

        </InnerContainer> 
    );
}

export default PhotoCard;