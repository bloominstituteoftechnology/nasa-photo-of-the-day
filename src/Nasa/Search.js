import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import "./Search.css";
//https://api.nasa.gov/planetary/apod?api_key=5jhP0qzjW14HtkX9vqAyeTOSCIaKpXToTMfmA9eJ





function Search() {
    let [date, updateDate] = useState("2020-04-28");
    let [data, updateData] = useState([]);
    let firstRun = true;

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=5jhP0qzjW14HtkX9vqAyeTOSCIaKpXToTMfmA9eJ" + "&date=" + date)
            .then(response => {
                //console.log(response);
                updateData(response.data);
            })
            .catch(err => {
                console.log(err);
            });
        
    }, [date]);


    function newDate(){
        let dateInput = document.querySelector("input");
        updateDate(dateInput.value);
    }
  
    return(
        <div>
            <input type = "date" min ="2000-01-01" max="2020-04-28"></input>

            <button onClick={newDate}>submit</button>

            <Header info={data}/>
        </div>
    );
};


  export default Search;