import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import styled from 'styled-components';

const time = props => {

    const { tdate, past, present, future, baseUrl, toGetDate, summary, video, title, image } = props;

    const Sdiv = styled.div`
    background-color:black;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    `
    
    const Stitle = styled.h2`
    color: white;
    padding: 3%;
    border: 4px solid black;
    height: 10%;
    width: 50%;
    text-decoration: underline overline; 
    `
    const Sabout = styled.p`
    text-align: center;
    border: 4px solid White;
    font-style: oblique;
    font-weight: bold;
    color: black;
    background-color: grey;
    padding: 2%;
    width:80%;
    `

    const Simg = styled.img`
    padding: 2%;
    margin-bottom: 2%;
    width: 80%;
    `

    const Nav = styled.div`
    width: 80%;
    display:flex;
    justify-content: space-evenly;
    `

    const Sbutton = styled.button`
    margin: 2%;
    border-color: crimson;
    background-color: black;
    color: white;
    `
    const Sdate = styled.h3`
    color:white;
    text-decoration: underline;
    `
    const Svid = styled.iframe`
    margin: 2%;
    width:80%;
    `

     

    return (
        <Sdiv>
            <Sdate> {tdate} </Sdate> 
            <Stitle>{title}</Stitle>   
            {image !== undefined && <Simg src = {image} alt='APOD' width='1280'/>}
            {video !== undefined && <Svid title={title} src={video} height='720' width='1280'/>}
            <Sabout>{summary}</Sabout>
            <Nav>
                <Sbutton onClick = {past}>Back A Day</Sbutton>
                <Sbutton onClick = {present}>Today</Sbutton>
                <Sbutton onClick = {future}>Forward A day</Sbutton>
            </Nav> 
        </Sdiv>
    )
}

export default time; 