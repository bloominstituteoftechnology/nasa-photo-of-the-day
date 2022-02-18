import React, { useState } from "react";
import axios from 'axios'
import Text from './Text'
import Image from './Image'
import styled from 'styled-components'


const StyledDate = styled.div`
background-color: lightgray;
`
const BodyBuild = (props) => {
    const [date, setDate] = useState()


        axios.get(`https://api.nasa.gov/planetary/apod?api_key=CP9ybXLIceXiyidiZgPDegKVLsL4iMscgj07zGoL`)
            .then(resp => {
                setDate(resp.data.date)
            })
            .catch (err => console.error(err))

return (
    <StyledDate className="container">
        <div> Date: {date}</div>
      {<Image />}
      {<Text/> }
    </StyledDate>
)

}

export default BodyBuild