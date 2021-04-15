import React,{useEffect, useState} from "react";
import axios from 'axios';

export default function Body(props){
    const {src} = props;
    const [bodyImg,setBody] = useState('');
    const [imgTitle, setTitle] = useState('');
    const [imgDate,setImgDate] = useState('');
    
    useEffect(()=>{
        axios.get(src).then((res)=>{
            const bodyTxt = res.data.explanation;
            const titleTxt = res.data.title;
            const imgDateTxt = res.data.date;
            setBody(bodyTxt);
            setTitle(titleTxt);
            setImgDate(imgDateTxt);
        })
    },[])
 

    return (

       
        <p>
            <b>Title:</b> {imgTitle}<br/>
            <b>Date:</b> {imgDate}<br/>
            <b>Explanation:</b> <br/>{bodyImg}</p>
    )
}