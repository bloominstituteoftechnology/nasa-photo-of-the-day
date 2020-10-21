import React from 'react'

const Content = props => {
  console.log(props.content)
  return (
    <div className="content">
      <div className="top__content">
        <h3>{props.content.title}</h3>
        <p>{props.content.date}</p>
      </div>
      <p>{props.content.explanation}</p>
      <p>-{props.content.copyright}</p>
    </div>
  )
}

export default Content
