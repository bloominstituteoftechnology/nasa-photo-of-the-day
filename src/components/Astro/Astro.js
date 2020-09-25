
import React,{useState} from "react";
import {altTxt} from "../../Globals";
import Media from "../Vid/Media"; 
import styled from "styled-components";




const AstroCard = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    width: 100%;
    padding: 20px;
    display: flex;
    min-height:100%;
    min-width:15rem;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;
`;

const AstroCardInfo = styled.p`
    height:100%;
    width:100%;
    padding-left:12px;
    box-shadow: 1px 1px black;
    border:1px solid black;


`;


const AstroImgD = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;

const Astro = ({props,isImg}) => {

        const title = props.title;
        const description = props.explanation;
        const url = props.url;
        const date = props.date;
        // const isI = true;
        console.log('in astro');
        console.log(isImg);
        

          // TODO animate the Loading... words
        if (!props.url) return <h3>Loading...</h3>; 
        else{
        return (
            <AstroCard>
              <h2>{title}</h2>
              <AstroCardInfo>{description}</AstroCardInfo>

              <AstroImgD>
                <Media url={url} isImg={isImg}/>
                <p>{date}</p>
              </AstroImgD> 
            </AstroCard>
          );
        }
};

export default Astro;