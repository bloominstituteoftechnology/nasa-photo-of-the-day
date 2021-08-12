import React, { useState } from 'react';
import PhotoHeader from './PhotoHeader';
import Details from './Details';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    0% {
      background-position-y: 0;
    }
    100% {
      background-position-y: -480px;
    }

`

const StyledPhoto = styled.div`
    display: flex;
    
    button {
        background: #111;
        position: relative;
        width: 180px;
        height: 60px;
        margin: 20px;
        line-height: 60px;
        letter-spacing: 2px;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
        trasnition: 0.5s;
        border: 1px solid #ec1840;
        &:hover {
            border: 1px solid transparent;
            background: #ec1840 url(https://i.postimg.cc/wBXGXbWN/pixel.png); // 360px x 1080px
            transition-delay: 0.8s;
            background-size: 180px;
            animation: ${kf} 0.8s steps(8) forwards;
        }
`
const StyledMenu = styled.div`
    width: 20%;
    margin: 0 auto;

    h1 {
        width: 220px;
        margin: 20% 0;
        font-family: 'Droid serif';
        font-style: italic;
        font-size: 2rem;
    }

    h1 span {
        font-size: 1rem;
        max-width: 220px;
    }

    label {
        color: ${pr => pr.theme.secondaryColor};
        font-size: 1rem;
        font-family: 'Inria Serif';
    }
`

const StyledImage = styled.div`
    margin: 0 auto;
    position: relative;
    text-align: center;
    font-size: 1rem;

    img {
        width: 100%;
    }

`

const StyledDetails = styled.div`
    position: absolute;
    width: 80%;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    background-color: rgb(10, 10, 10);
`

export default function Photo(props) {
    const { photo, setPhoto } = props;
    const [show, setShow] = useState(false);

    const detailsButtonHandler = () => {
        if (show) {
            setShow(false)
        } else setShow(true)
    }
    const randomButtonHandler = () => {
        setPhoto(null);
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
        setPhoto(null);
        const selectDate = document.querySelector('#dateSelector');
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
        <StyledPhoto>
            <StyledMenu>
                <h1>Astronomy Picture of the Day <span>from NASA</span></h1>
                <button onClick={() => randomButtonHandler()}>
                    Random photo
                </button>
                <br /><br /><br />
                <label for="html">Select day: </label>
                <br /><br />
                <input type="date" id="dateSelector" name="select-day"
                    min="1995-06-16" max={getTodayDate()} />
                <br />
                <button onClick={() => getDatePhoto()}>
                    Photo of The day
                </button>
            </StyledMenu>
            <StyledImage className='photoContainer'>
                <PhotoHeader
                    title={photo.title}
                    date={photo.date}
                />
                <button onClick={() => detailsButtonHandler()}>
                    {show ? 'Less details' : 'More details'}
                </button>
                <div className='imageWrapper'>
                    <img
                        alt={photo.title}
                        className='image'
                        src={photo.url}
                    />
                </div>
                <StyledDetails>
                   {show && <Details
                    explanation={photo.explanation}
                    copyright={photo.copyright}
                />} 
                </StyledDetails>
                
            </StyledImage>
        </StyledPhoto>
        
    )
}