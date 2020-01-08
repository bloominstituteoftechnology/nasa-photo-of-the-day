import React from "react";
import Pic from "./Pic";
import Description from "./Description";

export default function Body(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <Pic picture={props.picture} />
            <Description description={props.description}/>
        </div>
            
    );
}