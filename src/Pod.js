import React, { useEffect, useState} from 'react';

import axios from 'axios';


function Pod() {
    const[podData, setPodData] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=L5kG68ulrnuvDh7bGftjtsG0HjmbxUKmqCZcN2YA')
        .then(res => {
            setPodData(res.data);
        })
        .catch(error => {
            console.error(error)
        })
    }, []);
    
}

return (
    <div className = 'card'>

    </div>
)

