import React from 'react';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg
} from 'reactstrap';

const Example = (props) => {
    const { title, description, imageURL, date } = props;
    return (
        <div >
            <Card  >
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{date}</CardSubtitle>
                </CardBody>
                <img width="100%" src={imageURL} alt="Card image cap" />
                <CardBody>
                    <CardImg />
                    <CardText>{description}</CardText>
                    {/* <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink> */}
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;