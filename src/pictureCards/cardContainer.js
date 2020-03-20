import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Container, Row, Col
} from 'reactstrap';

const PicCard = (props) => {
    console.log(props, 'props from the images')



    return (
        <Container>
            <Col sm="12" md={{ size: 6, offset: 3 }}> <div>
                <Card backgroundColor="dodgerBlue">
                    <CardImg top-width='80%' src={props.src} alt='a pic of the day' />
                    <CardBody>
                        <CardTitle>{props.date}</CardTitle>
                        <CardText>{props.discription}</CardText>
                        <CardText>{props.copy}</CardText>
                    </CardBody>
                </Card>
            </div>
            </Col>

        </Container>


    )
}

export default PicCard