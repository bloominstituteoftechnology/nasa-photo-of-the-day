import axios from 'axios';
import {API_KEY} from './keys';

//get ALL 
export const getAll = () => {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=1995-06-16`)
    .then(res=>{

    }).catch(err=>{
        console.error(err);
    })
}

//get TODAY
export const getToday = () => {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res=>{

        }).catch(err=>{
            console.error(err);
        })
}

//get RANDOM
export const getRandom = () => {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`)
        .then(res=>{

        }).catch(err=>{
            console.error(err);
        })
}