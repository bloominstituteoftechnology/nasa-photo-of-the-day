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
            //instead of returning this call itself, return res
        }).catch(err=>{
            //...or return error
        })
}
//then in App.js, setNasaData(getToday()) --> SINCE we are setting it to what is returned by that function ( the RESULT) in the useEffect call there!

//get RANDOM
export const getRandom = () => {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`)
        .then(res=>{

        }).catch(err=>{
            console.error(err);
        })
}