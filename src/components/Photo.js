import React, { useState } from 'react';
import PhotoHeader from './PhotoHeader';
import Details from './Details';
import axios from 'axios';

export default function Photo(props) {
    const { photo, setPhoto } = props;
    const [show, setShow] = useState(false);

    const detailsButtonHandler = () => {
        if (show) {
            setShow(false)
        } else setShow(true)
    }
    const randomButtonHandler = () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1')
            .then(res => {
                console.log('here')
                setPhoto(res.data[0]);
            })
            .catch(err => {
                console.log('error')
                console.error(err);
            })
    }

    const getTodayDate = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    const getDatePhoto = () => {
        const selectDate = document.querySelector('#dateSelector');
        console.log(selectDate.value)
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selectDate.value}`)
            .then(res => {
                console.log('here')
                setPhoto(res.data);
            })
            .catch(err => {
                console.log('error')
                console.error(err);
            })
    }

    return (
        <div className='photoContainer'>
            <PhotoHeader
                title={photo.title}
                date={photo.date}
            />
            <button onClick={() => randomButtonHandler()}>
                Get another photo
            </button>
            <br /><br />
            <label for="html">Select date: </label>
            <input type="date" id="dateSelector" name="select-day"
                   min="1995-06-16" max={ getTodayDate() } />
            <button onClick={() => getDatePhoto()}>
                Submit
            </button>
            <br /><br />
            <button onClick={() => detailsButtonHandler()}>
                {show ? 'Close details' : 'More details'}
            </button>
            <br /><br />
            {show && <Details
                explanation={photo.explanation}
                copyright={photo.copyright}
            />}
            <div className='imageWrapper'>
                <img
                    alt={photo.title}
                    className='image'
                    src={photo.url}
                />
            </div>

        </div>
    )
}