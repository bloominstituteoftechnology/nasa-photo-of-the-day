import React, { useState, useEffect } from 'react'

const Description = () => {

    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    return (
        <div className = "description-containter">
            <h2>Description</h2>
            <p>placeholder</p>
        </div>
    )
}

export default Description;