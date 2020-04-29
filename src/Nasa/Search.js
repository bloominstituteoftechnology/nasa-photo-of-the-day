import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import "./Search.css";



function search() {

    function setDate(){
        let dateInput = document.querySelector("input");
        dateInput.focus();
        let date = dateInput.value;
        return date;
    }
    

    return(
        <div>
            <input type = "date" min ="2000-01-01" max="2020-04-28"></input>
            <div className="submit" onClick={()=>{
                     axios
                     .get("https://api.nasa.gov/planetary/apod?api_key=5jhP0qzjW14HtkX9vqAyeTOSCIaKpXToTMfmA9eJ"+"&date="+setDate())
                     .then(response =>{
                         return <Header date={response}/>;
                     })
                     .catch(err=>{
                        console.log(err);
                     });
            }}> submit </div>
            
            
        </div>
    );
};


  export default search;