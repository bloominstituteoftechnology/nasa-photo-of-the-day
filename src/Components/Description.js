import React from "react";

export default function Description({ description }) {
  console.log(typeof(description))

  return (
    <div className='PDiv'>
      <p>
        {description}
      </p>
    </div>
  )
}