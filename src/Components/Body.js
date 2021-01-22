import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const StyledBody = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    img{
        border-radius : 1%;
    }
    p{
        width :48%;
        font-size: 1.3rem;
        border: solid black 2px;
        padding: 9px;
        color : wheat;
    }

    #hidden{
        display: none;
    }

    button{
        font-size: 1.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 10px;
    }

`

  

function Body(props) {
    const [buttonOn, setButtonOn] = useState(true);

    const turnOn = () => {
      setButtonOn(!buttonOn);
      console.log(buttonOn);

    }
    return (
        <StyledBody>
            <img src={props.photo}  width = '50%' height = '500'></img> <br></br>
            <button onClick = {turnOn}>{buttonOn ? 'Hide' : 'Learn More'}</button> 
            {/* <p>{buttonOn ? `${props.explanation}` : ''}</p> */}
            {buttonOn ? <p>`${props.explanation}`</p> : <p id='hidden'></p>}
        </StyledBody>
    )
}

export default Body