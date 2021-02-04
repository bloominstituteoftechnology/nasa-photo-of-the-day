import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Header = styled.h1`
color: orange;


&:hover {
    color:yellow;
    font-size:4rem;
}
`
const Explanation = styled.p`
border:1px solid black;
margin: 2% 31% 2% 31%;
font-size:20px;

&:hover{
    background-color:grey;
    font-size: 30px;
    margin: 0%0%0%0%;
  }
`
const Image = styled.img`
width: 600px;
`

const Inputs = styled.div`
border: 5px solid red;
margin: 2% 31% 2% 31%;
padding:1%;
`

const Input = styled.input`
:hover{
    font-size:2rem;
    background-color:lightblue;
    color:red;
}
`

function BodyComponent () {
    const [nasaData, setNasaData] = useState ([]);
    const [year, setYear] = useState(2020)
    const [month, setMonth] = useState (8)
    const [day, setDay] = useState (4)


    const handleChange1 = e => {
        setYear(e.target.value)
    };

    const handleChange2 = e => {
        setMonth(e.target.value)
    }

    const handleChange3 = e => {
        setDay(e.target.value)
    }

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=CcmGBnkxQhivVPDmnl999hJsnKeKXavVqHad5mtJ&date=${year}-${month}-${day}`)
        .then(res => {
            console.log(res.data);
            setNasaData(res.data)
        })
        .catch(err => console.log(err))
    }, [year, month, day])
    

    return (
    <>
       <div>
           <Header>Impelment the current day code bellow</Header>  
           {/* span.textContent = new Date().toUTCString().split(" ").splice(0,4) */}
           <Image src = {nasaData.url}/>
           <Explanation>Description: {nasaData.explanation}</Explanation>
           <p>What Photo of the Day would you like to see from NASA?</p>

           <Inputs>
               YEAR:
               <Input
                type="text"
                placeholder="YEAR"
                value={year}
                onChange={handleChange1}
               />
                MONTH:
               <Input
                type="text"
                placeholder="MONTH"
                value={month}
                onChange={handleChange2}
               />
                DAY:
               <Input
                type="text"
                placeholder="DAY"
                value={day}
                onChange={handleChange3}
               />
           </Inputs>
       </div>
    </> 
    )
}

export default BodyComponent;

// How to impletemetn the current day, how to show dubble picture , how to implement event lister