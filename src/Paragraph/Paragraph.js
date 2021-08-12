import React, { useState } from 'react'
import styled from 'styled-components'


const StyledParagraph = styled.div`
  p {
    display:flex;
    justify-content: space-around;
    color: ${pr => pr.theme.white};
    background-color: ${pr => pr.theme.primaryColor};
  }
  button {
    padding-top: 10vh;
    padding-bottom: 10vh;
    background-color: red;
    border-radius: 100%;
    font-size: 120%;
    text-aling: center;
    box-shadow: 5px 10px 5px 1px black;
  }

  @media ${pr => pr.theme.breakpointMobile}{
    width: initial;
  }

`



export default function P(props) {
   const {copyright, paragraph, date} = props
   const [launch, setLaunch] = useState(10)

    const initiateLaunch = (countDown) => {
        setLaunch( countDown )
    }


   return (
       <StyledParagraph className='Paragraph'>
          <span>{date}</span>
          <p>{paragraph}</p>
          <button onClick={() => 
            initiateLaunch(launch - 1)}>
              {launch === 10 ? 'LAUNCH' : 'LAUNCHING'} ZEUS.16<br/>
              {launch === 0 ? 'LAUNCH SUCCESSFULL' : `${launch}`}
          </button><br/><br/>
          <span>{copyright}</span>
       </StyledParagraph>
   )
}