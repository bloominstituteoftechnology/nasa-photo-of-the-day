import React from "react";
import styled from "styled-components";

const Photo = (props) => {
    const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    background: #6A5ACD;
    color: silver;
    font-weight: bold;
    margin: 0 auto;
    border-radius: 2%;
    border: 3px solid navy;
  `;

const Main = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;;
    padding: 10px;
 `;

const About = styled-div`
    width: 90%;
    margin: 0 auto;
    padding: 10px;
 `;

const Date = styled.h5`
    align-self: flex-end;
    padding-top: 10px;
    color: white;
 `;

const Image = styled-img`
    display: block;
    alignment: center;
    margin: auto 0;
    width: 75%;
    padding-top: 10px;
  `;

return (
    <Card>
        <Date>{props.date}</Date>
        <Main>
            <Image src={props.url} alt="Nasa Picture of the Day"/>
            <About>{props.explanation}</About>
        </Main>
    </Card>
  )
};

export default Photo;