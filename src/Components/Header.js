import React, { useState, useEffect } from   'react';
import axios from "axios";
import PhotoSection from "./PhotoSection";
import Explanation from './Explanation';
import "./Header.css";
import {Card,  CardText, CardBody, CardSubtitle, CardHeader, Container} from 'reactstrap';



const Header = () =>  {

    const [data, setData] = useState({})
    

        useEffect(() =>{
            axios
            .get("https://api.nasa.gov/planetary/apod?api_key=RpYTmNgXaheC4U17auPCes2znlmQlQlTn2xIKpsc")
                .then (res => {
                    setData(res.data)
                    console.log(res.data);
                })
                .catch(console.log)

        }, []);

        return(
            
            <div>
            <Container className="container">
                    <Card fluid={true}>
                        
                            <CardHeader className="headerCardSection" tag="h1">NASA Photo of the Day</CardHeader>
                            
                            <CardBody className="body1">
                                <CardSubtitle> 
                                <h2>Today's Date:{data.date}</h2>
                                </CardSubtitle>

                                <div className="photo">
                                   <PhotoSection  url={data.url}/>
                                </div>
                                </CardBody>

                                <CardBody>
                                    <h4>Photo: {data.title}</h4>
                                    <h5>By: {data.copyright}</h5> 
                                    <CardText><Explanation explanation ={data.explanation}/></CardText>
                                </CardBody>
                    </Card>
            </Container>
               
                
                
                
                
            </div>
            
        )


}

export default Header;
