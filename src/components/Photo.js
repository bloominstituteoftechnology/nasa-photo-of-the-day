import React, { useState } from "react";
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const StyledDetails = styled.div`
    height: 60%;
    border-radius: 10px;
`
const StyledImage = styled.img`
    border-radius: 100px;
`

function Photo(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { photo } = props;

    const toggle = () => setIsOpen(!isOpen);

    return (
        <StyledDetails>
            <Button onClick={toggle} style={{ margin: '1rem' }}>Toggle Picture</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            <StyledImage src={ photo } alt='Astronomy Pic of the Day'/>
                        </CardBody>
                    </Card>
                </Collapse>
        </StyledDetails>
    )
}

export default Photo;