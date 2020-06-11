import React from 'react'
import {Alert, Jumbotron, Button} from 'reactstrap'
import Container from './Container'
import Paragraph from './Paragraph'
export const Photo = (props) => {    
        
            const {details} =  props
    
    return(
     
    <div>
        <Jumbotron>
            <h1 className="display-3">{details.title}</h1>    
        </Jumbotron>  
            <img src = {details.url}></img>
        <Jumbotron>
            <Container>
                <Paragraph>{details.explanation}</Paragraph>
    <Paragraph>{details.date}</Paragraph>
               {console.log(details.copyright)}
                <p>copyright: {details.copyright}</p>
            </Container>
              
        </Jumbotron>
            
        
       
        <Button color= 'primary'>Previous</Button>
        <Button color= 'secondary'>Next</Button>
    </div>
  
  
    )
        
    
}
export default Photo