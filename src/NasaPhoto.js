import React from 'react'


function NasaPhoto(props) {
    return (
      <div>
        <img alt='nasa' src={props.data.url} />
      </div>
  )
}

export default NasaPhoto