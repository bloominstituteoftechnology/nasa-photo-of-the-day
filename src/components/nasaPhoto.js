import React from 'react'

export default function NasaPhoto(props){

const displayPhoto = (props) => {
    const { nasadata } = props;

    return(
    nasadata.map((img) => {
    <div>
        <img key={img.media_type}/>

        {displayPhoto(props)}

    </div>
    })
    )
}
}
