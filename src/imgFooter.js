import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import { URL, API_KEY } from './App';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
//import { Button } from 'react-bootstrap';


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
            <p>{likes}</p>
            <Button className='button' variant='danger' onClick={e => setLikes(likes + 1)} size='lg' active>Like</Button>
            <Button className='button' variant='secondary' onClick={e => setLikes(likes - 1)} size='lg' active>Hate</Button>
            <Card>
                <CardHeader>Image Description</CardHeader>
                <CardBody>
                    <blockquote className='blockquote mb-0'>
                        <p>
                            {details}
                        </p>
                        <footer className='blockquote-footer'>
                            Taken by NASA
                        </footer>
                    </blockquote>
                </CardBody>
            </Card>
        </>
    )
}

