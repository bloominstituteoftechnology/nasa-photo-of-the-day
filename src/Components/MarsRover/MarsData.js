import React, { useState, useEffect } from "react";
import axios from "axios";
// import MarsCard from "./MarsCard";
import '../../css/index.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Logo from '../../assets/Logo.png';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function MarsData() {

    const [mars, setMars] = useState([]);
    const roverImages = [];
    const [page,setPage] = useState('')
    // const [openDate, setOpenDate] = useState(true)
    // const [date,setDate] = useState('')

    // console.warn('state Open Button', openDate)

    // const roverImages = () => {
    //   for (let i = 0; i < mars.length; i++){
    //     roverImages.push()
    //   }
    // }

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=JnWo6HiIwC9BG0xa2UyobaexzaMVqCbQi9h9hs6q
        `)
        .then(res => {
            console.log(res.data.photos);
            setMars(res.data.photos);
        })
        .catch(error => {
      console.log(error);
        })

    }, [])

  

    return (
        <div class="">
             <div className="logoNasa" ><img class="mt-4 mb-4 flex-auto h-48 object-center items-center" src={Logo} /><h1 className="headerTitle">Mars Rover Photos</h1></div>

        <div className="marsCard">
        <div  >

        <div class="" >
                {mars.map((e, id) => {
                    return(

                      <div class="m-2 bg-white inline-block max-w-sm rounded overflow-hidden shadow-lg">
  <img class=" h-64 w-full object-cover" src={e.img_src} alt="Mars Rover Images" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Rover Name:  { e.rover.name }</div>
    <p class="text-gray-700 text-base">
    Earth date:  { e.earth_date }    </p>
  </div>
  <div class="px-4 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#marsrover</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#nasa</span>
  </div>


</div>
                    )
                })}
        {<button value={page+1} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow" 
           onClick= { (e) => setPage(e.target.value)}>Next Page</button>}


            </div>

          {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
          {/* <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody> */}
        </div>
      </div>
      </div>

        // <div className="marsWrapper"> 
        //  <div className="logoContainer">
        //     <img className="logo"src={Logo} />
        //     </div>
        // <h1 className="marsHeading">Mars Rover Images</h1>
        //     <div className="marsPhoto">
        //         {mars.map((e) => {
        //             return(
        //                 <MarsCard props={e.img_src} />
                        
        //             )
        //         })}
        //     </div>
        // </div>
    );
}

