import React, {useState, useEffect}  from "react"
import Image from "./Image"
import Summary from "./Summary"
import Title from "./Title"

import axios from "axios"

import styled from "styled-components"


const Wrapper = styled.div`

    display:flex;
    margin-top: 140px;
    
    
    width: 100%;
    justify-content: space-evenly;
    align-items:center;
    


`
const Wrapper2 = styled.div`
    margin-left: -150px;
    display: flex;
    flex-direction: column;
   
    width: 32vw;
`


export default function Apod ( props ){
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchData = () => {
            axios.get('https://api.nasa.gov/planetary/apod?api_key=uP5trKsNMLyDTC7ZnkfU1fenQ9KW9dbSmwYMKs6e')
            .then (res => {
                console.log(res)
                setData(res.data)

            })
            .catch (err => {
                console.log(err)
            })

        }
        fetchData()
    },[])
    

    return (

       
        <div className='Apod'>



        
        <Wrapper>
            <Image img={data.url} alt={data.title}/>
        
        <Wrapper2>
            <Title title={data.title}/>
            <Summary sum={data.explanation}/>
        </Wrapper2>
        </Wrapper>


        {/* <h1>{data.title}</h1>
        <img src = {data.url}/>
        <p>{data.explanation}</p> */}


        
        </div>
        


    )



}