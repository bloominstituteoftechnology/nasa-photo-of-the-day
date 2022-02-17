import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, API_KEY} from '../constants'
import style,{keyframes} from 'styled-components';


const PStyling = style.p`
background-color:${(props)=>props.theme.primaryColor};
font-size:1.5rem;
font-variant:normal;
color:${pr=>pr.theme.backgroundColor};
`;
const TitleStyle = style.div`
    color:${pr=>pr.theme.secondaryColor};
    font-family: 'Shadows Into Light', cursive;
    font-size: 2rem;
    font-variant:small-caps;
    padding:20px;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-content:center;
    margin:0px;
    `;

const ButtonStyle = style.button`
    width:20%;
    display:flex;
    flex-direction:center;
    align-content:center;
    justify-content:center;
    margin:0px;
    border-radius: 20px;
    background-color:${(props)=>props.theme.primaryColor};

`;

export default function Explanation(props){
    const{close,explanationInfo,show} = props;
    const [explanation,setExplanation] = useState(null);
    useEffect(()=>{
        axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then(res=>{
            setExplanation(res.data.explanation);
            console.log(res.data);
        })
        .catch(err=>{
            console.error(err);
        })
    },[])


    return(
        <TitleStyle>
            <h2> Explanation :</h2>
            {
            explanationInfo && 
                <PStyling>{explanation}</PStyling>
            }
            { explanationInfo&&
                <ButtonStyle onClick ={close}>hide</ButtonStyle>
            }
            { !explanationInfo&&
                <ButtonStyle onClick ={show}>show</ButtonStyle>

            }
        </TitleStyle>
    )
}