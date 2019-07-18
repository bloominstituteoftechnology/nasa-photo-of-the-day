import React from "react";
import { Image } from "./StyledWidgets.js";
import { Segment } from "semantic-ui-react";
// import 'semantic-ui/dist/semantic.min.css';

export default function ImgCard({imgURL,imgTitle,explanation}) {
    return  (
        <div className = "img-card">
            <h2>{imgTitle}</h2>
            <Image src = {imgURL} alt = "nasa image of day" />
            <Segment class="ui raised segment">
            <p >{explanation}</p>
            </Segment>
            <br></br>
        </div>
    );
} 