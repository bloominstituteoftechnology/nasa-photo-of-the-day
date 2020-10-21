import React, {useState} from 'react'
import Image from "./ImgContainer";
import Content from "./Content";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'


const Container = props => {
  return (
    <div className="container">
      <div className="datepicker item__container">
        <i class="far fa-calendar-alt calendar__icon"></i>
        <Calendar className="calendar" />
      </div>
      <Image imgUrl={props.nasaData.url}/>
      <Content content={props.nasaData}/>
    </div>
  )
}

export default Container
