import React, { useState } from "react";
import NasaPic from "./nasaPic"
import{Row,Jumbotron,CardText,CardTitle, Col, Card, CardSubtitle,Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from "reactstrap"

const NasaCards = (props) => {
    console.log(props)
 
 const [dropdownOpen, setDropdownOpen] = useState(false);

 const toggle = () => setDropdownOpen(prevState =>!prevState)
return(
    
        <Jumbotron body className="text-center">
            <h1 className="display-3">NASA picture of the day</h1>
        <Card >
        <Row>
            <Col>      
                <NasaPic  img={props.nasaInfo.hdurl}/>
            </Col>
            <Col>
                <CardTitle className="lead">{props.nasaInfo.title}</CardTitle>
                <CardSubtitle style={{paddingBottom:'50px'}}>Date: {props.nasaInfo.date}</CardSubtitle>         
                <CardText style={{marginRight:'30px'}}>{props.nasaInfo.explanation}</CardText>  
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle>Learn more!</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <a href='https://www.NASA.gov'>NASA</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Col>
        </Row>
  </Card>
  </Jumbotron>
    
)
}

export default NasaCards;