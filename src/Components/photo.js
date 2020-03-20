import React, {useState, useEffect} from 'react';
import "../App.css";
import axios from 'axios';
import { Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';

// For my personal reference:
// https://apod.nasa.gov/apod/astropix.html
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// https://api.nasa.gov/
// https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

export default function Photo(props){

    const [picture, setPic] = useState([]);
    const [date, setDate] = useState("");

    useEffect(() => {

        axios

        .get(`https://api.nasa.gov/planetary/apod?api_key=ZwWLfujY6OMgGUkls4B1eGj5ACTgiIAAbO9fKkv2&date=${date}`)

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
                <CardImg width="100%" src={picture.url} alt="NASA Pic of the Day" />
                <CardBody>
                    <CardTitle className="card">{picture.title}</CardTitle>
                    <CardText className="card">{picture.explanation}</CardText>
                    <CardText className="card">{picture.date}</CardText>
                    <Button className="butt" href="https://apod.nasa.gov/apod/astropix.html">Original Post</Button>
                </CardBody>
            </Card>
            
        </div>
    )
}