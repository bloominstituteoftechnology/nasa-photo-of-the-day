import react from 'react';

function PhotoOfTheDay(props){
const {hdurl} = props

return(
    <>
    <img className = 'img' src= {hdurl}></img>
    </>
)
}

export default PhotoOfTheDay