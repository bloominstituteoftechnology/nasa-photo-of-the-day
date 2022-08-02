import React from 'react'

const Description = props => {
    const { setDesc, desc, explanation } = props

    const openDesc = () => {
       setDesc(true)
      }
    
      const closeDesc = () => {
        setDesc(null)
      }
    return (
        <div>
            <button className='button' onClick={openDesc}>Show Description</button>
            <button className='button' onClick={closeDesc}>Hide Description</button>
            <div className='descriptionContainer'>
                {<div className='description'>
                    {desc === true ? explanation : null}
                </div>}
            </div>
        </div>
    )
}

export default Description;