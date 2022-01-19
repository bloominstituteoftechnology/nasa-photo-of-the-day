import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
export default function CarouselPhoto (props){
    const { data } = props
    console.log(data.url)
    return (
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{data.title}</h3>
          <p>{data.explanation}</p>
        </Carousel.Caption>
        </Carousel.Item>
    )
}