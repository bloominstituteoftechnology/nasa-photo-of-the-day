import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from './Card';
import Button from '../styles/Button-styles'


 function NasaData(props){
     const [data, setData] = useState([])
     const [showState, setShowState] = useState(false)
     useEffect(() => {
        Axios.get('https://api.nasa.gov/planetary/apod?api_key=39zrVQAGcbrvrgnAOPNjb6W30su6P3ytEKCaxd0o')
        .then(resp => {
            console.log(resp.data)
            setData(resp.data)
        })
        .catch(error => {
            console.error(error)
        })
     }, [])

         if(!showState){
             return(
                <div>
                <Card title={data.title} date={data.date} image={data.url} copyright={data.copyright} />
                <Button className='expand-button' bgColor='lightgreen'  onClick={() => setShowState(!showState)}>Show More</Button>
                </div>
             )
         }
     
     return(
         <div>
         <Card title={data.title} date={data.date} image={data.url} copyright={data.copyright} explanation={data.explanation} />
         <Button className='expand-button' bgColor='#ffcccb' onClick={() => setShowState(!showState)}>Show Less</Button>
         </div>
     )
}
export default NasaData;