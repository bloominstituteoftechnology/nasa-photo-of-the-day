import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
const NasaTitle = (props) => {
    return (
<Jumbotron>    
    <h1>{props.title}</h1>
    <p>{props.info}</p>
    <Button color="primary">Learn More</Button>
</Jumbotron>
    )
}
export default NasaTitle;