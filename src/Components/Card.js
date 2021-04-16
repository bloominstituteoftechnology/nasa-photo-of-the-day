import React from 'react'
import Picture from './Picture'
import Body from './Body'
import styled from 'styled-components'

const StyledCard = styled.div`
    color: white;
    background-color: gray;
`


const Card = (props) => {
    if (!props.nasaData) {
        return <h3>Loading...</h3>;
    } 
       const {title, explanation, date}=props.nasaData
       return (
           <StyledCard>
               <Picture pictureOfTheDay={'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'}/>
               <Body title={title} explanation={explanation} date={date}/>
           </StyledCard>
       ) 
}

export default Card

