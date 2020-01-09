import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Photo from './Photo';

const apiURL = 'https://api.nasa.gov/planetary/apod?api_key=AEtQZQCWhyJU8ASBrhdnBCGb7QP4kM6oEDdSdnSc';

const Photos = (props) => {
    const [photoData, setPhotoData] = useState([]);
    // console.log(props);
    useEffect(() => {
        axios.get(apiURL)
            .then(res => {
                let photoDataFromAPI = res.data;
                setPhotoData(photoDataFromAPI);
            })
            .catch(err => console.log(err));
    }, []);
    // console.log(props);

    return (
        <div>
            <Photo
                src={photoData.url}
                title={photoData.title}
                copyright={photoData.copyright}
                explanation={photoData.explanation}
                date={photoData.date} 
            />
        </div>
    );
}

export default Photos;