import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, API_KEY} from '../constants'

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
        <div>
            <h2> Explanation :</h2>
            {
            explanationInfo && 
                <p>{explanation}</p>
            }
            { explanationInfo&&
                <button onClick ={close}>-hide-</button>
            }
            { !explanationInfo&&
                <button onClick ={show}>+show+</button>

            }
        </div>
    )
}