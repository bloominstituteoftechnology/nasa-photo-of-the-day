import React from "react";
import styled from "styled-components";


function header (props){
    //console.log(props);
    //let [data] = setState[prop]
    //console.log(data);

    const Title = styled.div`
        margin-top:30px;
        color:#9790a3;
    `
    const TitleName = styled.span`
        font-size: 2rem;
    `    
    
    const Imgs = styled.img`
        border:2px solid gray;
        padding:1px;
        margin:20px;
        width:70%;
        height:500px;
    `
    
    const Info = styled.p`
        border:1px dashed lightgray;
        padding:5px;
        margin: 0 10px;
        margin-bottom:30px;
        text-align: justify;
        display:none;
    `

    return (
        <div>
            <Title>Title of the Image:<br/> <TitleName>{props.info.title}</TitleName></Title>
            <Imgs src= {props.info.url} alt="Image of the Day"></Imgs>
            <button type="button" class="btn btn-light">Learn more about this picture.</button>
            <Info>{props.info.explanation}</Info>
        </div>
    );

}

export default header;