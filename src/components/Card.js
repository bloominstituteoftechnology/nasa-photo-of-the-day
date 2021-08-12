import React from "react";
import styled from "styled-components";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, UncontrolledCollapse
  } from 'reactstrap';

const StyledCard = styled.div `
    width: 83%;
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    margin: 0 auto;
    background-color: #0F044C;
    color: #EEEEEE;
    
    h2{
        margin-top: 25px;
        font-size: 2.5rem;
        letter-spacing: 8px;
        text-transform: uppercase;
    }
    
    button{
        width: 150px;
        padding: 10px 20px;
        margin: 0 auto;
        border:0.16em solid #FFFFFF;
        box-sizing: border-box;
        text-decoration:none;
        text-transform:uppercase;
        color:#EEEEEE;
        text-align:center;
        transition: all 0.15s;
        background-color: #0F044C;
        }
    button:hover{
         color:#DDDDDD;
         border-color:#DDDDDD;
        }
    button:active{
         color:#EEEEEE;
         border-color:#EEEEEE;
        background-color: #0F044C;
        }
    img{
        width: 85%;
        height: auto;
        margin: 0 auto;
    }

    .copyright {
        margin: 25px 0;
        font-size: 1.4rem;
        font-family:'Anton', sans-serif;
        letter-spacing: 8px;
        text-transform: uppercase;
    }

    .explanation {
        margin: 20px 30px;
    }

`


const ApodCard = (props) =>{
    const { title, imageURL, date, explanation, copyright } = props

    // return (
    //     <StyledCard>
    //       <Card>
    //         <h1>{title}</h1>
    //         <CardImg top width="100%" src={imageURL} alt="Astronomy Pictrue of the Day" />
    //         <CardBody>
    //           <CardTitle tag="h5">Photo by: {copyright}</CardTitle>
    //             <button  id="toggler" style={{ marginBottom: '1rem' }}>
    //             More Info
    //             </button>
    //           <UncontrolledCollapse toggler="#toggler">
    //           <CardText>{explanation}</CardText>
    //           </UncontrolledCollapse>
    //         </CardBody>
    //       </Card>
    //     </StyledCard>
    //   );
    
    
    return (
        
        <StyledCard className="card-container">
            <h2>{title}</h2>
            <p>{date}</p>
            <img className="apodImg" src={imageURL}/>
            <p className="copyright">{copyright}</p>
            <button  id="toggler" style={{ marginBottom: '1rem' }}>More Info</button>
            <UncontrolledCollapse toggler="#toggler">
                <p className="explanation">{explanation}</p>
            </UncontrolledCollapse>
            
        </StyledCard>
    )
}

export default ApodCard;