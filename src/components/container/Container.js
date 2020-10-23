import React, {useState, useEffect} from 'react'
import Image from "./ImgContainer";
import Content from "./Content";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import axios from "axios";
import styled from "styled-components";


const MainContainer = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: center;
`;

const CalendarContainer = styled.div`
  width: 20%;
	padding: 1rem 0rem;
	align-self: center;
  margin: 1rem 0 2rem 0;
  box-shadow: 0px 0px 30px -12px rgba(0, 0, 0, 0.38);
	display: flex;
	justify-content: center;
	border-radius: 20px;
`;


const Container = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  
 
  useEffect(()=> {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=7xNkmfDJ544SvwhrFQOnBC67yBsFvSj0FY5Y3Y61&date=${date}`)
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.log(err));
  }, [date])

  //show calendar
  const onChange = () => {
    if(show === true){
      return setShow(false)
    } else {
      return setShow(true)
    }
  }
  
  
  const changeDate = (date) => {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    let newDate = [year, month, day].join("-");
    setDate(newDate)

    if(newDate){
      return setShow(false);
    }
  }

  return (
    <MainContainer>
      <CalendarContainer>
        <i onClick={onChange} className="far fa-calendar-alt calendar__icon"></i>
        {show && <Calendar onClickDay={changeDate} className="calendar" />}
      </CalendarContainer>
      <Image imgUrl={data.url}/>
      <Content content={data}/>
    </MainContainer>
  )
}

export default Container
