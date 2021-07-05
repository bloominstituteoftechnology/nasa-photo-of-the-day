import React from "react";
import { Container, Row, Col } from 'reactstrap';

const Post = ({title,date,url,explanation,copyright}) => {
    
    return(
        <Container>
            <Row> 
           <Col> <img src={url} alt = "pic of the day"/></Col>
           </Row>
           <Row>
           <Col><h2 className="text-info">{title}</h2></Col>
           <Col> <h3 className="text-primary">{date}</h3></Col>
           <Col><h3 className="text-warning">{copyright}</h3></Col>
            </Row>
            <Row> <Col> <h3 className="text-success">Description:</h3> 
            <p className="text-success"> {explanation}</p></Col></Row>
        </Container>
    )
}

export default Post;