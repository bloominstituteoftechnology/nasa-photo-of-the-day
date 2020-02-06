import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Asteroid from './asteroid';
import styled from 'styled-components';

import { Button } from 'reactstrap';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`



export const Asteroids = () => {

    const [ data, setData ] = useState([])
    const [ sort, setSort ] = useState(false)

    const fetchData = () => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=spKBP8PFum2CMgJT4yaFGza6lW8uJydNBKyk09jr`)
            .then(res => {
                console.log(res.data.near_earth_objects["2015-09-08"])
                setData(res.data.near_earth_objects["2015-09-08"])
            })
            .catch(err => console.log(err))
    }

    const sortBySize = () => {
        let sortedData = data
        sortedData.sort((a, b) => a.estimated_diameter.meters.estimated_diameter_max - b.estimated_diameter.meters.estimated_diameter_max )
        setData(sortedData)
        setSort(true)
        console.log(sortedData)
    }

    useEffect(fetchData, [])

    return (
        <div>
            <Container>
                {
                    data !== []
                        ?
                    data.map((asteroid) => <Asteroid key={asteroid.id} {...asteroid} />)
                        :
                    <p>Loading...</p>
                }
            </Container>
            <Button onClick={() => sortBySize()}>Sort</Button>
        </div>
        
    )
}

export default Asteroids;