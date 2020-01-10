import React, { useEffect, useState } from "react";
import axios from "axios";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from "styled-components";


export default function PictureComponent(){
    const [pictureData, setPictureData] = useState([])

    useEffect(() => {
        axios
            .get ("https://api.nasa.gov/planetary/apod?api_key=s0zNjpbfiiM7FI7UhsxFv0X0IqmhdkxtMJ2QzAfg")
            .then (response => {
                setPictureData(response.data);
            })
            .catch(error => console.log("The data was not returned", error));
    }, [])

    console.log("picture ", pictureData);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    return (
        <div className="picture-card">
            <div className="card-head">
                <h2>{pictureData.tile}</h2>
                <h3>{pictureData.date}</h3>
            </div>
            <div className="card-img">
                <img className="picture" src={pictureData.url} alt="picture of the day"></img>
            </div>
            <div className="card-explanation">
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Explanation</Button>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>{pictureData.explanation}</CardBody>
                        </Card>
                    </Collapse>
            </div>
            
        </div>
    )

};



    // const didUpdate = () => {
    //     axios
    //         .get ("https://api.nasa.gov/planetary/apod?api_key=s0zNjpbfiiM7FI7UhsxFv0X0IqmhdkxtMJ2QzAfg")
    //         .then (response => {

    //             setPictureData(response.data);
    //             console.log(response);
    //         })
    //         .catch(error => console.log("The data was not returned", error));
    // }

    // useEffect(didUpdate, []);

