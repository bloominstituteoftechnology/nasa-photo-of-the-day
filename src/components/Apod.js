import React, {useState, useEffect}  from "react"
import Image from "./Image"
import Summary from "./Summary"
import Title from "./Title"


import axios from "axios"

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



        <Title title={data.title}/>
        <Image img={data.url} alt={data.title}/>
        <Summary sum={data.explanation}/>



        {/* <h1>{data.title}</h1>
        <img src = {data.url}/>
        <p>{data.explanation}</p> */}


        
        </div>



    )



}