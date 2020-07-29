import React, { useState, useEffect } from "react";
import { UncontrolledCarousel } from 'reactstrap';
import axios from 'axios';
const [apod, setApod] = useState({});
const [apod1, setApod1] = useState({});
const [apod2, setApod2] = useState({});

function Example() {
const dates = [
'2019-2-26',
'2019-2-27',
'2019-2-28'
];

//first slide
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
//second slide
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
//third slide
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
const items = [
    {
src: `${apod.url}`,
altText: 'Slide 1',
caption: 'Slide 1',
header: 'Slide 1 Header',
key: '1'
},
{
src:  `${apod1.url}`,
altText: 'Slide 2',
caption: 'Slide 2',
header: 'Slide 2 Header',
key: '2'
},
{
src:  `${apod2.url}`,
altText: 'Slide 3',
caption: 'Slide 3',
header: 'Slide 3 Header',
key: '3'
}
   ];
   const Example2 = () => <UncontrolledCarousel items={items} />;
return Example2;
}
   export default Example;