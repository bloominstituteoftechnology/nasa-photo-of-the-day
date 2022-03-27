import axios from 'axios';
import {API_KEY} from './keys';

//get ALL 

//start_date?=1995-06-16 --> first APOD day woo
//do not need to specify end date; will default to today

//get TODAY
const getToday = () => {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res=>{

        }).catch(err=>{
            console.error(err);
        })
}

//get RANDOM
//count?=1 --> returns a random image.