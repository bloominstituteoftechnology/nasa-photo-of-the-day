import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, API_KEY} from '../constants'
export default function Title(props){
    const{photos}=props;
    return <div>
        <h1>{photos.title}</h1>
    </div>
}