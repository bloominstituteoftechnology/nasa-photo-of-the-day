import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';


const MainPicStyle = styled.img`
width:50%;

@media(max-width:1000px){
  width:100%;
}
`
const VideoStyle = styled.div`
text-align:center;
justify-content:center;
width:40%;
height:auto;
margin: 0 auto;

.player-wrapper {
  position: relative;
  padding-top: 56.25%;
}

.react-player {
  position: absolute;
  top: 0;
  left: 0;
}

@media (max-width: 1100px){
    width:70%;
}
`

const Picture = props => {
    const {pictureUrl,videoUrl,media} = props;    
   
    if (media === 'video'){
    return (
        <VideoStyle>
        <div className='player-wrapper'>
        <ReactPlayer  className="react-player" 
        url={videoUrl}  
        width="100%" height="100%" controls={true}/>
        </div>
        </VideoStyle>
    )}
    else {
    return (
        <div className='MainPicture'>
        <MainPicStyle className='Nasa' src ={pictureUrl} alt="Nasa APOD"/>
        </div>
    )
    }
}

export default Picture;
