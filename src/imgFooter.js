import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import { URL, API_KEY } from './App';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.css";
//import button from './styles.js';


export default function GetDescription() {

    const [details, setDetails] = useState('');
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        axios
            .get(`${URL}${API_KEY}`)
            .then((res) => {
                setDetails(res.data.explanation)
            })
            .catch((err) => console.log(err));
    }, []);

    
    return (
        <>
            <p>❤️{likes}❤️</p>
            <Button style={Des} className='button' variant='danger' onClick={e => setLikes(likes + 1)} size='lg' active>Like</Button>
            <Button style={Des} 
            className='button' variant='secondary' onClick={e => setLikes(likes - 1)} size='lg' active>Hate</Button>
            <Card>
                <CardHeader> - Image Description - </CardHeader>
                <CardBody className= 'bg'>
                    <blockquote className='blockquote mb-0'>
                        <p>
                            {details}
                        </p>
                        <footer style={{color: 'white'}} className='blockquote-footer'>
                            Taken by NASA 🚀
                        </footer>
                    </blockquote>
                </CardBody>
            </Card>
        </>
    )
}

const Des = {
    padding: '6px 10px',
    margin: '5px',
    border: 'none',
    borderRadius: '3px',
    color: 'royalblue',
}