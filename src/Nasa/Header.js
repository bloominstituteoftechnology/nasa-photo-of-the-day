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
    const Content = styled.div`
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `
    
    const Imgs = styled.img`
        border:2px solid gray;
        padding:1px;
        margin:20px;
        width:70%;
        height:500px;
    `
    
    function toggle(){
       let info = document.querySelector("p.info");
       info.classList.toggle('hide');
    };


    return (
        <div>
            <Title>Title of the Image:<br/> <TitleName>{props.info.title}</TitleName></Title>
            <Content>
                <Imgs src= {props.info.url} alt="Image of the Day"></Imgs>
                <button type="button" class="btn btn-light" onClick={toggle}>Learn More</button>
                <p className="info hide">{props.info.explanation}</p>      
            </Content>
            
        </div>
    );

}

export default header;