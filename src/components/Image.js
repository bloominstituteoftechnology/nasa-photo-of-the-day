import React from "react"


export default function Image(props){

    const {img, alt} = props;
    

    return (
        <img src={img} alt={alt}/>
    )


}