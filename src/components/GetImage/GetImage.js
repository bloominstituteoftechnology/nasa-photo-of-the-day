import React, { useEffect } from "react";
import './img.css';
const axios = require('axios');

function GetImage(props) {

let convertDate = (date) => {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}




let apiDate = convertDate(props.day());
    const
    container = document.createElement('div'),
    title = document.createElement('h2'),
    img = document.createElement('img'),
    desc = document.createElement('p');

    container.append(title, img, desc);

    container.classList.add('img-container');
    container.classList.add('container');
    title.classList.add('img-title');
    img.classList.add('img');
    desc.classList.add('img-description');

let getApp = setInterval(() => {
    if (document.querySelector('.App') !== null && document.querySelector('.img-container') === null | undefined) {
        document.querySelector('.App').appendChild(container);
        clearInterval(getApp);
    }
}, 500);

useEffect(() => {
 axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+apiDate)
    .then((res) => {
        console.log(res.data);
        document.querySelector('.img-title').innerHTML = res.data.title;
        document.querySelector('.img').src = res.data.url;
        document.querySelector('.img-description').innerHTML = res.data.explanation;
    }).catch(err => {
        console.log('ERROR: ', err);
    });
})
    return(null)
}

export default GetImage;