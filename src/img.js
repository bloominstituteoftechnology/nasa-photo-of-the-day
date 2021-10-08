import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';

import "./App.css";
import styled from 'styled-components';



const StyledDetails  = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;



background-color: white;
}

h2 {
   background-color: pink;
}
div,p{
   background-color:pink;
   border:1px gray solid;
   margin:1%;
   padding:2%;
   letter-spacing:3px;
   text-align: center;
   border-radius: 10px;
}
img {
   width:30%;
   height:30%;
   margin:2%;
   margin-bottom:5%;
}

`
function Img (props){
   const {img,close,dat}=props;
   console.log('dataaaaaaaaaaaaaaaa');
   console.log(dat);
   return(
      < StyledDetails >
     
         
         <p>NASA app! Have fun </p>
         <div>{dat.date}</div>
         <div>{dat.explanation}</div>
         <div>{dat.title}</div>
         <span role="img" aria-label='go!'>🚀</span>!
       
        
          
           
            
        
         <img src={img} />
       
     
         
       
     
     </StyledDetails>
   )
}

export default Img;