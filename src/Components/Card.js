import React from "react";
import "../index.css";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #100f35;
    align-items: center;
`;

const Title = styled.p`
    color: white;
    font-size: 30px;
`;

const Logo = styled.img`
    padding: 1% 1%;
    padding-left: 50px;
    width: 70px;
    height: 70px;
`;

const Form = styled.form`
    display: flex;
    align-items: flex-end;
    margin-left: auto;
    padding-right: 30px;
`;

const PhotoOfTheDay = styled.img`
    width: 98%;
    height: 500px;
    margin-top: 1%;
    margin-bottom: 1%;
    border-radius: 5px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: row;
    border: 5px solid slategrey;
    margin: 5px;
`;

const Info = styled.div`
    width: 20%;
    text-align: left;
    padding-top: 12px;
    padding-left: 15px;
    line-height: 1px;
`;

const DescP = styled.p`
    width: 80%;
    padding-left: 10px;
    margin-right: 10px;
    text-align: left;
    border-left: 5px solid slategrey;
`;

const Footer = styled.footer`
    text-align: center;
    background-color: #100f35;
    color: white;
    font-style: italic;
    padding: 5px;
`;

export function changeDate(){
    if(document.getElementById('inputID').value !== null){
        //console.log(document.getElementById('inputID').value);
        return document.getElementById('inputID').value;
    }else{
        return "";
    }
}

const Card = (props) => {
    return (
        <div className="card">
            <Header>
                <Logo src="https://www.festisite.com/static/partylogo/img/logos/nasa.png"></Logo>
                <Title>NASA's Picture of the Day</Title>
                <Form action="/App.js" method="GET">
                    <div style={{color:"white", paddingRight:10+"px"}}>Enter date (yyyy-mm-dd):</div>
                    <input type="text" name="date" id="inputID"></input>
                    <input type="submit" value="Submit" onClick={changeDate}></input>
                </Form> 
            </Header>
        
            <PhotoOfTheDay src={props.hdurl}></PhotoOfTheDay>
            <Description>
                <Info>
                    <p>Copyright:</p>
                    <p>{props.copyright}</p>
                    <p>{props.date}</p>
                </Info>
                <DescP>{props.explanation}</DescP>
            </Description>
            <Footer>
                <p>Copyright Lambda School</p>
            </Footer>
        </div>
    )
};

export default Card;