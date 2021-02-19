import React, {useState}  from 'react'
import Details from './Details'
import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 3px;
  background: ${props => props.theme.buttonBackground};
  color: ${pr => pr.theme.buttonText};
 `

const Info = props => { 

    const [infoOpen, setInfoOpen ] = useState(false)
    const openButton = () => setInfoOpen(!infoOpen)
    
    const{data}= props

    //this is the open button on the page
    return ( 
      <div>
        <h2>The photographer is {data.copyright}</h2>
        <StyledButton onClick={openButton}>
              {openButton === false ? 'Show Details' : 'Hide Details'}
        </StyledButton>
          {
            infoOpen && <Details data={data} />
          }
          
      </div>)
}

  export default Info