import React from 'react';

  
export default function Main(props){
    
console.log(props)
 return (
    <>
        
     <img src = {props.image} alt = ""/>
     <p> {props.info}</p>
    </>
        
 )



}