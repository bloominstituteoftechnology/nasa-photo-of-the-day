import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const StyledImg=styled.div`
img{
    border-radius: 20px;

&:hover{
  opacity: 50%;
  
  
 
}
}
`

const Img = () =>{
const [img, setimg] = useState({})
    useEffect( () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=rMWQ6CSoVomGhkdbiHMLjswHe2dYjVER6YM1PZzh') 
       .then(response => {
           console.log(response)
           setimg(response.data)
       })
    },[])
        
      return( 
           <StyledImg>
               <img src = {img.url} alt = "" />
               
           </StyledImg>
       )
      } 
   

export default Img
