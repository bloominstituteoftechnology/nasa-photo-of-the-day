import React, { useState, useEffect }from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
export function Card (){
    const [details, setDetails] = useState([])
    useEffect(()=>{
      axios.get('https://api.nasa.gov/planetary/apod?api_key=ElqWJ9fKhR1CHz66c8aNCTXkFdBpGZg6fT4XsoF3&start_date=2021-12-01&end_date=2021-12-07').then((resp)=>{
        console.log(resp.data, 'Inside Card API')
        setDetails(resp.data)
      })
    }, [])
    const CaruImg = styled.img`
    width:60%;
    margin: 5%, 20%;
    padding: 15%;
    background-color: slategrey;
    `
    return (
        <>
<Carousel>
{details.map((obj, i) =>{
         return <Carousel.Item>
             <CaruImg
          className="d-block w-100"
          src={obj.url}
          alt={`Slide ${1}`}
        />
        <Carousel.Caption>
          <h3>{obj.title}</h3>
          <p>{obj.explanation}</p>
        </Carousel.Caption>
         </Carousel.Item>
          })}
{/* <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://images.unsplash.com/photo-1639077567163-f5bcf1c94d06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{'details[0].title'}</h3>
          <p>{'details[0].explanation'}</p>
        </Carousel.Caption>
        </Carousel.Item> */}
        {/* {details.map((obj, ) =>{
         return <CarouselPhoto data={obj}/>
          })} */}
</Carousel>
  {/* {details.map((obj, i) =>{
      return i === 0 ? <CarouselPhotoActive data={obj} key={i}/> : <CarouselPhoto data={obj} key={i}/>
      })}

     */}
    </>
    )
}