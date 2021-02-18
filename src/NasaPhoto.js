import React from 'react'


function NasaPhoto(props) {
    return (
      <div>
        <img src={props.data.url} />
      </div>
  )
}

export default NasaPhoto