import React, { useEffect, useState} from 'react';
import PodData from './PodData';
import axios from 'axios';


function Pod() {
    const[podList, setPodList] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=L5kG68ulrnuvDh7bGftjtsG0HjmbxUKmqCZcN2YA')
        .then(res => {
            setPodList(res.data);
        })
        .catch(error => {
            console.error(error)
        })
    }, []);
    


return (
    <div className = 'card'>
        <PodData key = {podList.data}
        title = {podList.title}
        
        />
    </div>
)

};

export default Pod;