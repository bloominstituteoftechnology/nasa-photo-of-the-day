import React, { useState, useEffect } from "react";
import Apod from "./Apod";
import Head from "./Head";
import axios from "axios";


function Nasa(){
    const [apod, setApod] = useState({});
    const [apod1, setApod1] = useState({});
    const [apod2, setApod2] = useState({});
  const dates = [
    '2020-2-26',
    '2020-2-27',
    '2020-2-28'
  ];

    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?date=${dates[0]}&api_key=87qfeH0SHge3BLvWRDlbFTSOcIkYlaJ04ZF7yHB6`)
        .then(response => {
          console.log(response.data);
         setApod(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);

    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?date=${dates[1]}&api_key=87qfeH0SHge3BLvWRDlbFTSOcIkYlaJ04ZF7yHB6`)
        .then(response => {
          console.log(response.data);
         setApod1(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);

    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?date=${dates[2]}&api_key=87qfeH0SHge3BLvWRDlbFTSOcIkYlaJ04ZF7yHB6`)
        .then(response => {
          console.log(response.data);
         setApod2(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    return (
        <div>
                <Head 
      title = {apod.title}
      copyright = {apod.copyright}
       />

            <Apod 
                media_type = {apod.media_type}
                date = {apod.date}
                title = {apod.title}
                url = {apod.url}
                explanation = {apod.explanation} 
                />
             <Apod 
                media_type = {apod1.media_type}
                date = {apod1.date}
                title = {apod1.title}
                url = {apod1.url}
                explanation = {apod1.explanation} 
                />
              <Apod 
                media_type = {apod2.media_type}
                date = {apod2.date}
                title = {apod2.title}
                url = {apod2.url}
                explanation = {apod2.explanation} 
                />
        </div>
    );
}
export default Nasa;