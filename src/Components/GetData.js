import React, {useState, useEffect} from "react";
import axios from "axios";

function GetData(){
const [data, setData] = useState({});

 useEffect (() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=LxxuQJv9MQxooAm6LVjWmS2oVhR9BouJKu0xhYYY`)
    .then(response => {
      console.log(response.data)
      setData(response.data)
    })
    .catch(error => {
      console.log("Error ", error);
    });
 },[]) 
    

    return <div></div>
}

export default GetData;







