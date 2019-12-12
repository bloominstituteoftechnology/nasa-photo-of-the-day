import React, {useState, useEffect} from "react";
import PhotoCard from "./photocard";
import axios from "axios";

function PhotoTable() {
 const [day, daySetter] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=efqpYMWtZrkVNksCSBAJ4q3qi1JLJ7eef5w4wrp5")
            .then(response => {
            console.log(response.data);
            daySetter(response.data)
            })
            .catch(error => {
                console.log("Couldn't find the photo of the day", error);
            })
    }, []);
    console.log("the day array", day);
  return (
    <div className="PhotoTable">
      <PhotoCard key={day.index} hdurl={day.hdurl} explanation={day.explanation} date={day.date} title={day.title}/>
    </div>
  );
}

export default PhotoTable;