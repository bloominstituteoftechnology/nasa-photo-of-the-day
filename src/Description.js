import React from 'react'

const Description = props => {
    return (
        <div>
            <button className='button' onClick={props.openDesc}>Show Description</button>
            <button className='button' onClick={props.closeDesc}>Hide Description</button>
            <div className='descriptionContainer'>
                {<div className='description'>
                    {props.desc !== null ? props.explanation : null}
                </div>}
            </div>
        </div>
    )
}

export default Description;