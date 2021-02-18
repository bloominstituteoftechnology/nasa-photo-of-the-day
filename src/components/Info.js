import React, {useState}  from 'react'
import Details from './Details'

const Info = props => {  

    const [infoOpen, setInfoOpen ] = useState(false)
    const openButton = () => setInfoOpen(!infoOpen)
    
    const{data}= props

    //this is the open button on the page
    return ( 
      <div className='info'>
          {
            infoOpen && <Details data={data} />
          }
          <button onClick={openButton}>
              {openButton === false ? 'Show Details' : 'Hide Details'}
          </button>
      </div>)
}

  export default Info