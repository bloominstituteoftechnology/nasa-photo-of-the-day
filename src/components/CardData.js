import React, {useState, useEffect} from "react";
import axios from "axios";
import DatePicker from 'react-date-picker';


//import dummyData from "./dummydata";
import CreateCard from "./CreateCard";

import {UncontrolledAlert} from 'reactstrap';


function CardData() {
    // const [picture] = useState([dummyData]);
    function getDate() {
        const todaysDate = new Date();
        const dd = todaysDate.getDate();
        let mm = todaysDate.getMonth()+1;
        const yyyy = todaysDate.getFullYear();
        if(dd<10) {
            dd ='0'+dd;
        }
        if (mm<10) {
            mm = '0'+mm;
        }
        const today = yyyy+'-'+mm+'-'+dd;
        return today;
    }

    const [picture, setPicture] = useState([]);
    useEffect(() => {
        axios
        .get ("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date="+getDate())
        //.get("http://localhost/dummydata.js")
        .then(response => {
            setPicture(response.data);

            console.log("The returned response is:",response);
        })
        .catch(error => [console.log("Something went wrong, we couldn't get any data", error)]);
    },[]);

        // {
//     const [picture] = setPicture(Data);
// },[]);
    // console.log("The picture data returned is:",picture);
//     useEffect(() => {
        
    // setPicture({Data});
//     console.log("The dummydata file is", picture);
// },[]);

//alert("The picture.copyright prop is",picture.copyright);
    //console.log("The picture data returned is:",picture);


    return (
        <div className="">
            <UncontrolledAlert color="primary">
                Photos provided by Nasas APOD API
            </UncontrolledAlert>
        <CreateCard 
        copyright={picture.copyright} 
        dateStamp={picture.date} 
        explanation={picture.explanation}
        url = {picture.url}
        title = {picture.title}
        media_type = {picture.media_type}
        hdurl = {picture.hdurl}
          />
        </div>
    )
};


export default CardData;