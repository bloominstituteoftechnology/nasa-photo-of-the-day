import React, { useState, useEffect } from   'react';
import axios from "axios";
import PhotoSection from "./PhotoSection";
import Explanation from './Explanation';
import "./Header.css";
import {Card,  CardText, CardBody, CardSubtitle, CardHeader, Container} from 'reactstrap';



const Header = props =>  {

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
            <Container>
                    <Card fluid={true}>
                        
                            <CardHeader class="headerCardSection" tag="h1">NASA Photo of the Day</CardHeader>
                            <CardBody>
                                <CardSubtitle> 
                                <h2>Today's Date:{data.date}</h2>
                                <h2>Photo: {data.title}</h2>
                                <h4>By: {data.copyright}</h4> 
                                </CardSubtitle>

                               <div class="photo"><PhotoSection  url={data.url}/></div>
                                
                                </CardBody>
                                    <CardBody>
                                    <CardText><Explanation explanation ={data.explanation}/></CardText>
                                </CardBody>
                            </Card>
                </Container>
               
                
                
                
                
            </div>
            
        )


}

export default Header;
