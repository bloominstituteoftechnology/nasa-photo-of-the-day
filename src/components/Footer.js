import React from "react";

export default function Footer(props){
    const copy = props.copyright;
    let copyText = "";
    if(copy){
        copyText = `Image copyright: ${copy}`;
    }
    return(
        <footer>
            <p>{copyText}</p>
            <h3>This information is provided by NASA's APOD API </h3>            
        </footer>
    );
}