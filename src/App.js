import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import axios from 'axios'

function apod(){
    const [apod, setApod] = useState([])
    useEffect(() => {
    const fetchApod = (id) => 
        fetch(`https://api.nasa.gov/planetary/apod`)
            .then(response => response.json())
            .then(apod => {
                console.log(apod)
                setApod(apod.id)
            })
            fetchApod(id)
        }, [id])
        return apod
}

 

function App({ id, apod }) {
    const apod
    <div>
        <h3>{title.id}</h3>
        <a href={hdurl.id}>
        <img src={url.id} alt={media_type.id} width='100%' height='100%'/>
        </a>
        <p>{explanation.id}</p>

    </div>

}

export default App