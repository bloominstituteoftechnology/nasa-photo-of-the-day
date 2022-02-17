import React, { useState } from "react";
import axios from 'axios'
import Text from './Text'
import Image from './Image'


const BodyBuild = () => {
    const [date, setDate] = useState()


        axios.get(`https://api.nasa.gov/planetary/apod?api_key=CP9ybXLIceXiyidiZgPDegKVLsL4iMscgj07zGoL`)
            .then(resp => {
                setDate(resp.data.date)
            })
            .catch (err => console.error(err))

return (
    <div className="container">
        <div> Date: {date}</div>
      {<Image />}
      {<Text/> }
    </div>
)

}

export default BodyBuild