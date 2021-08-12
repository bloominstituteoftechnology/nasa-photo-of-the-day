import React, { useState } from "react";
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const StyledImage = styled.img`
    border-radius: 100px;
    max-height: 80vh;
    max-width: 100%;
`

function Photo(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { photo } = props;

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button onClick={toggle} style={{ margin: '1rem' }}>Toggle Picture</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            <StyledImage src={ photo } alt='Astronomy Pic of the Day'/>
                        </CardBody>
                    </Card>
                </Collapse>
        </div>
    )
}

export default Photo;