import React, {useState, useEffect} from 'react';
import "../App.css";
import axios from 'axios';
import { Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';

export default function Photo(props){

    const [picture, setPic] = useState([]);
    const [date, setDate] = useState("");

    useEffect(() => {

        axios

        .get(`https://api.nasa.gov/planetary/apod?api_key=bSRyVfNcZr5D3cMzTQVVdLoRe9he9DQBBWgrONAZ&date=2012-03-14`)

        .then(response => {

            console.log(response);

            setPic(response.data);

            setDate(response.data.date);
    
        })
        .catch(error => {

            console.log("Error: ", error);

        })

    });

    return (
        <div className="photoContainer">
            <Card>
                <CardImg width="100%" src={picture.url} alt="NASA Photo of the Day" />
                <CardBody>
                    <CardTitle className="card">{picture.title}</CardTitle>
                    <CardText className="card">{picture.explanation}</CardText>
                    <CardText className="card">{picture.date}</CardText>
                    <Button className="button" href="https://apod.nasa.gov/apod/astropix.html">NASA Post</Button>
                </CardBody>
            </Card>
            
        </div>
    )
}