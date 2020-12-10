import React from 'react'

const Image = (props) => {
    const { title, url } = props

    return (
        <div className="media">
            <img src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
            <h2>{ 'Soy una Imagen' }</h2>
        </div>
    )
}

export default Image