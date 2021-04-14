import React from 'react';

export default function Pictures(props){
    const {pictures} = props;
    const imgArray = [];
    imgArray.unshift(pictures)
    if(imgArray.length === 8){
        imgArray.pop();
    }
    return (
        <>
            <img src = {pictures} />
        </>
    )
}