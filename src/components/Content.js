import React from 'react';


export default function Content(props){
    const {photos} = props;
    console.log('fefefhgejhgf',photos);
    return <div>
        <iframe id = 'video' src= {`${photos.url}`}  title={`${photos.title}`}/>
    </div>
}