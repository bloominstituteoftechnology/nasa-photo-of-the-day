import react from  'react'


function MarsPhotos(props){
    const {img, camera} = props
    return(
        <div>
        <p>Picture taken from: {camera}</p>
        <img className = 'marsPhoto' src = {img}></img>
        </div>
    )
} 

export default MarsPhotos