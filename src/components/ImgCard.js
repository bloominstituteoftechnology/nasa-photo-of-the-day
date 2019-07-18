import React from "react";
import { Image, Button } from "./StyledWidgets.js";

export default function ImgCard({imgURL,imgTitle,explanation}) {
    return  (
        <div className = "img-card">
            <h2>{imgTitle}</h2>
            <Image src = {imgURL} alt = "nasa image of day" />
            <Button type="primary">Learn more</Button>
            <p>{explanation}</p>
            <br></br>
        </div>
    );
} 