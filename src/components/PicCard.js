  
import React from 'react'
import styled from "styled-components";

const NasaPic = styled.div `
    width:100%;
`;
const Img = styled.img `
    max-width: 100%;
    border: 1px solid blue; 
    border-radius: 12px;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.5); 
`;
const MainH1 = styled.h1 `
    color: midnightblue;
`;
const MainH2 = styled.h1 `
    color: deepskyblue;
`;
const ParaDesc = styled.p `
    border: 2px solid grey;
    border-radius: 12px
    margin-bottom: 4%;
    color: dodgerblue;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.5);
    padding: 3%;
`;


const PicCard = (props) => {
    
    return (
        <div>
            <MainH1>Nasa's Photo of the day</MainH1>
          <MainH2>Title:  {props.title}</MainH2> 
          <NasaPic>
          <Img alt='space' src={props.hdurl}/>
          </NasaPic> 
            <div className='Bottom'>
                <ParaDesc>
                      {props.explanation}</ParaDesc>
                
                
                
                
            
            </div>
        </div>
    );
}
export default PicCard
