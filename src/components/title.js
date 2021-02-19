import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


const StyledTitle = styled.div`
    text-align:center;
    h1
    {
        color:#cd9dd4;
        &:hover
        {
            color:#6a8c8f;
        }
    }
    img
    {
        filter:grayscale(100%);
        &:hover
        {
            filter:none;
        }
    }

`
function Title() 
{
    const[oneTitle,setTitle] = useState({});
    useEffect(() =>{axios.get('https://api.nasa.gov/planetary/apod?api_key=C1UlGYikoKn06CZj9n5aw2HO8dRtrOnAoZDrgusn').then(
        res =>
        {
            // oneTitle = res.data;
            setTitle(res.data);
        }
    )},[]);
    return (
        <StyledTitle>
            <h1>{oneTitle.title}</h1>
            <img src={oneTitle.url} alt={oneTitle.title}/>
        </StyledTitle>);
}

export default Title;