import React, {useState, useEffect} from 'react'
import axios from "axios"
import Card from './Card'


const CardBuilder = props => {
    const [data, updateData] = useState([])
    


    useEffect(() => {
        {axios.get(`https://api.nasa.gov/planetary/apod?api_key=0eCAfzcU6VICeD5eWsXoPfhU6HQqG5T44OB21qdD&date=${props.date}`)
        .then(res => {
            updateData(res.data)
            console.log(res)
        }).catch(err => console.log(err))}
    },[props.date])
    return (
        <div>
              <Card explanation = {data.explanation} title = {data.title} date = {data.date} imgUrl = {data.hdurl} /> 
        </div>
    );
}
;


export default CardBuilder;