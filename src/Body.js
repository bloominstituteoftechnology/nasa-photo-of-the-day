import React,{useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components'


const StyledDivContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
// border:1px solid grey; 

`
const StyledDivChild = styled.div`
display: flex;
flex-direction: column;
width: 56%;
padding:1% 0;
// border:1px solid grey; 
`
const StyledP = styled.p`
font-family: 'Roboto Mono', monospace;
text-align:center;
flex-direction: column;
`
export const StyledTitle = styled.p`
font-family: 'Architects Daughter', cursive;
text-align:center;
font-size:1.5rem;
height:1.5rem
`


export default function Body(props){
    const {src} = props;
    const [bodyImg,setBody] = useState('');
    
    const [imgDate,setImgDate] = useState('');
    
    useEffect(()=>{
        axios.get(src).then((res)=>{
            const bodyTxt = res.data.explanation;
            const imgDateTxt = res.data.date;
            setBody(bodyTxt);
            setImgDate(imgDateTxt);
        })
    },[])
 

    return (

    <StyledDivContainer>
        <StyledDivChild>
            <StyledTitle><b>Date</b></StyledTitle> 
            <StyledP>{imgDate}</StyledP>
            <StyledTitle><b>Explanation</b></StyledTitle>
            <StyledP>{bodyImg}</StyledP>
        </StyledDivChild>
    </StyledDivContainer>   
    )     
}