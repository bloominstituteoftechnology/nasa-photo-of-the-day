import React , {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Badge, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap'

const StyleDetails = styled.div`
    width: 80%;
    font-weight: bold;
    margin: 10%;
    padding: 5%;

    &:hover {
        color: pink;
        background-color: cyan;
        transition: all 0.5s ease-in-out;
    }
`
const Details = () => {
    const [info, setInfor] = useState([])

    useEffect(() => {
        axios.get('https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image')
            .then(response => {
                //console.log('details.js :  ', response)
                setInfor(response.data.collection.items)
            })
            .catch(error => console.log(error))
    },[])

    return (
        <StyleDetails>
            <h2> Awsome picture json file from NASA </h2>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}> Toggle</Button>
            <UncontrolledCollapse toggler="#toggler">
                <Card>
                    {info.map((info, index) => <Badge color="primary" key = {index} href = {info.href} target = "_blank"> Jason file {index} </Badge>)}
                </Card>
            </UncontrolledCollapse>
        </StyleDetails>
    )
}

export default Details