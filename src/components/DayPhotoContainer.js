import React, {useState, useEffect} from 'react';
import DayPhoto from './DayPhoto';
import axios from 'axios';
import Example from './Example';


export default function DayPhotoContainer () {
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=dA0WZJwegrMiHJToOmY4zEyPnrZUojzwJfGVaPXY')
        .then(response => {
            console.log(response.data);
            
            setPhoto(response.data);
        })
        .catch(error => {
            console.log('The data was not returned', error);       
});
    }, []);
        return (

            <div>
            <DayPhoto 
             image={photo.hdurl}
           />
             
                <Example 
            
                 
                 date={photo.date}
                explanation={photo.explanation}
                title={photo.title}
                copyright={photo.copyright}

                 />

                
            </div>
        );   
}