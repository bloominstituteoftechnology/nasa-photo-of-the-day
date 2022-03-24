import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
width: auto;
margin: auto;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
border-size: border-box;
img {
    padding: 2rem;
    max-width: 100vw;
    max-height: 80vmax;
    padding-top: 3px;
   
}
p {
    border: 2px solid black;
    background-color: ${pr => pr.theme.white};
    
}
`





const NasaPhoto = (props) => {
    return (
        <Content className='nasa-photo-wrapper'> 
        <h3>{props.photo.title}</h3>
        <p>{props.photo.date} </p>
        <img src ={props.photo.hdurl} />
        <p>{props.photo.explanation}</p>
        </Content>
        
    )
}


export default NasaPhoto