import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
font-family: monospace;
font-size: 24px;

`
const Details = () =>{
    const [tail, settail] = useState({})
        useEffect(() => {
            axios.get('https://api.nasa.gov/planetary/apod?api_key=rMWQ6CSoVomGhkdbiHMLjswHe2dYjVER6YM1PZzh')
            .then( response => {
                console.log(response)
                settail(response.data)
            })
        }, [])

        return(
            <StyledDetails>
              {tail.explanation} 
              
                </StyledDetails>
        )
}

export default Details