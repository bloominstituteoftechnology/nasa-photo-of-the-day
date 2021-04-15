import React, {useState} from 'react';
import Comments from './Comments';
import {v4 as uuid} from 'uuid';

const profiles = [
    { "id" : uuid(),
    "img" : "https://stripe.com/img/v3/atlas/guide/heidi-zak.jpg",
    "name" : "Shirley Soggybottom",
    "comment" : "Wow! What a thingy :)"},
    { "id" : uuid(),
    "img" : "https://images.generated.photos/JTLRRLXOwKjp7Lnb5FIkpo6RrSkq1pyn-SAps7SHJJI/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODUxMTMuanBn.jpg",
    "name" : "Damien Hobgoblin",
    "comment" : "Woah! I am so floored!"}
]


export default function Photo(props){
    const [commentsOn, setCommentsOn] = useState(false);
    const commentsToggle = () => setCommentsOn(!commentsOn);
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={commentsToggle}>Comments</button>
            {commentsOn && <Comments profiles = {profiles}/>} 
        </div>
        
    )
}