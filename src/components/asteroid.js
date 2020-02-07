import React, { useState } from 'react';
import styled from 'styled-components';

import { Collapse, Card, CardBody} from 'reactstrap';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    width: 250px;

`

const Text = styled.h2`
    text-algin: center;
    font-size: 27px;
    cursor: pointer;
`

const AsteroidDiv = styled.div`
    background: ${props => `rgba(${props.colors[0]}, ${props.colors[1]}, ${props.colors[2]})`};
    height: ${prop => prop.height}px;
    width: ${prop => prop.width}px;
    border-radius: 50%;
`

export const Asteroid = ({ name, estimated_diameter, close_approach_data }) => {

    const { close_approach_date_full, relative_velocity, miss_distance } = close_approach_data[0];

    let randomColor = () => {
        return Math.floor(Math.random() * 255)
    }
    
    const rgba = [randomColor(), randomColor(), randomColor()]

    const [ open, setOpen ] = useState(false);
    const [ colors, setColors ] = useState(rgba)

    const est_diameter = ((estimated_diameter.meters.estimated_diameter_min + estimated_diameter.meters.estimated_diameter_max)/5)
    const height = est_diameter - (est_diameter/8)
    const width = est_diameter + (est_diameter/8)


    // const randomColor = () => {
    //     return Math.floor(Math.random() * 255)
    // }
    // const rgba = [randomColor(), randomColor(), randomColor()]
    return (
        <Container>
            {/* <div
                style={{
                    background: `rgba(${rgba[0]},${rgba[1]},${rgba[2]})`,
                    height: est_diameter - (est_diameter/8),
                    width: est_diameter + (est_diameter/8),
                    borderRadius: "50%"
                }}
            /> */}
            <AsteroidDiv height={height} width={width} colors={colors} />
            <Collapse isOpen={open}>
                <Card>
                    <CardBody>
                        <ul>
                            <li>Close approach date: {close_approach_date_full}</li>
                            <li>Relative velocity: {relative_velocity.miles_per_hour}mph</li>
                            <li>Miss distance: {miss_distance.miles}</li>
                            <li>Estimated diamter: {(est_diameter * 5)/2}meters</li>
                        </ul>
                    </CardBody>
                </Card>
            </Collapse>
            <Text onClick={() => setOpen(!open)}>{name.slice(1, name.length - 1)}</Text>

        </Container>
    )

}

export default Asteroid;