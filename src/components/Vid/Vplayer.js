
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
// import "./Vplayer.css";
import ReactDOM from 'react-dom';



class Vplayer extends React.Component {
    render () {
      return (
          <div className='player-wrapper'>
          <ReactPlayer
            url='https://vimeo.com/243556536'
            className='react-player'
            playing
            width='100%'
            height='100%'
          />
        </div>
      )
    }
  }
export default Vplayer;