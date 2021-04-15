import React,{useState,useEffect} from "react";
import axios from 'axios';

// const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14';
export default function Img(props){
    const {imgSrc} = props;
    const [activeImg,setImg] = useState('');
    
    useEffect(()=>{
        axios.get(imgSrc).then((res)=>{
            const imgUrl = res.data.url;
            setImg(imgUrl);
        })
    },[]);
    return <img src ={activeImg}></img>
}