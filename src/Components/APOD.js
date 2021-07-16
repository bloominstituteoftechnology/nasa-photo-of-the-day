  
import React, { useEffect, useState } from 'react';
import PicCard from './PicCard';
import axios from 'axios';
import DetailsCard from './DetailsCard';
import styled from 'styled-components'

const StyledAPOD = styled.div`
    background-color: #B0C4DE;
    padding: 5%;
    margin: 4%;
    border-radius: 8px;
    box-shadow: 0px 1px 6px -2px #807f7f;
`

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
        <StyledAPOD>
            <PicCard 
                title={media.title}
                url={media.url}
                date={media.date}
            />
            <DetailsCard
                explanation={media.explanation}
            />
        </StyledAPOD>
    );
}