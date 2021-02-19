import React, {useState}  from 'react'
import Details from './Details'
import styled from 'styled-components'

const StyledInfo = styled.div`
  
 `

const Info = props => {  

    const [infoOpen, setInfoOpen ] = useState(false)
    const openButton = () => setInfoOpen(!infoOpen)
    
    const{data}= props

    //this is the open button on the page
    return ( 
      <StyledInfo>
        <h2>The photographer is {data.copyright}</h2>
        <button onClick={openButton}>
              {openButton === false ? 'Show Details' : 'Hide Details'}
        </button>
          {
            infoOpen && <Details data={data} />
          }
          
      </StyledInfo>)
}

  export default Info