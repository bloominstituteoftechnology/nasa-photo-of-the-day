import React, { useState, useEffect } from "react";
import axios from "axios";
// import MarsCard from "./MarsCard";
import '../PhotoCard/Photo.scss';
import '../MarsRover/Mars.scss';
import Logo from '../../assets/Logo.png';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function MarsData() {

    const [mars, setMars] = useState([]);
    // const [openDate, setOpenDate] = useState(true)
    // const [date,setDate] = useState('')

    // console.warn('state Open Button', openDate)

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=3&api_key=JnWo6HiIwC9BG0xa2UyobaexzaMVqCbQi9h9hs6q
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
        <div>
              <img className="logo"src={Logo} />
        
        <h1 className="marsHeading">Mars Rover Images</h1>

        <div className="marsCard">
        <Card >

        <div className="marsPhoto" >
                {mars.map((e, index) => {
                    return(
                        <CardImg top width="100%" key={index} src={e.img_src}  />
                        
                    )
                })}
            </div>
          {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
          {/* <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody> */}
        </Card>
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

