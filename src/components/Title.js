import React from 'react'
import styled from 'styled-components'

const TitleCard = styled.div`
  color: #e8e8e8;
  background-color: black;
  border: 2px solid grey;
  border-radius: 3px;
  width: 60%;
  margin: 0 auto;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;

`;

function Title(props) {
  console.log(props)
// Display a loading message while the data is fetching
if (!props.title) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
return (
  <TitleCard>
    <h1>Nasa Photo of the Day</h1>
    <h2>{props.title}</h2>
    <p><span>{'\u00A9'}copyright</span> {props.copyright}</p>
    </TitleCard>
)
}

export default Title;