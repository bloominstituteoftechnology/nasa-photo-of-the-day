import React from "react";



function NasaCardContainer({title, date, hdurl, explanation}){
    
    return (
        
        <div>
            <p>{title}</p>
            <p>{date}</p>  
            <img src = {hdurl}/>
            <p>{explanation}</p>
        </div>
    )
}

export default NasaCardContainer;