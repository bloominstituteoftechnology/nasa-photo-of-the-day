import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import "./Search.css";
//https://api.nasa.gov/planetary/apod?api_key=5jhP0qzjW14HtkX9vqAyeTOSCIaKpXToTMfmA9eJ
import styled from "styled-components";





function Search() {
    let [date, updateDate] = useState("2020-05-01");
    let [data, updateData] = useState([]);
    // const StyledButton = styled.div`
    // `;
    const Button = styled.button`
        background-color: #34e5eb;
        color: white;
        margin-left: 1%;
        border-radius: 15%;
        cursor: pointer;
        &:hover {
            font-size:1.1rem;
            color:black;
            background-color: #768ca3;
        };
    `;
    const Input = styled.input`
    `;
    

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
            <Input type = "date" min ="1990-01-01" max="2020-05-03"></Input>
            <Button onClick={newDate}>Submit</Button>
            <Header info={data}/>
        </div>
    );
};


  export default Search;