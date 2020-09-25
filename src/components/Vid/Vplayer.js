
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import "./Vplayer.css";
import ReactDOM from 'react-dom';
import styled from "styled-components";


let PlayerWrapper = styled.div`
    position: relative;
    padding-top: 1.25%; /* 720 / 1280 = 0.5625 */
    width:100%;
    height:100%;
    background-color: beige;

`;


class Vplayer extends React.Component {
    render () {
      return (
          <PlayerWrapper>
            <ReactPlayer
                url={this.props.src}
                className='react-player'
                playing
                width='100%'
                height='100%'
            />
        </PlayerWrapper>
      )
    }
  }
export default Vplayer;