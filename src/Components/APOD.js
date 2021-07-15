  
import React, { useEffect, useState } from 'react';
import PicCard from './PicCard';
import axios from 'axios';

export default function APOD(props) {
    

    const [media, setMedia] = useState({});

    useEffect(() => {
        
        axios.get('https://api.nasa.gov/planetary/apod?api_key=zAK1NKpmKRIQ7OWlm7sdhGxxt0l1wqCYnvkY4SwU&date=2012-03-14')
          .then(res => {
            setMedia(res.data)
          })
          .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <PicCard 
                title={media.title}
                url={media.url}
                explanation={media.explanation}
                date={media.date}
            />
        </div>
    );
}