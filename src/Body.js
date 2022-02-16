import React, { useState, useEffect } from "react";
import axios from 'axios'
import Text from './Text'
import Image from './Image'


const BodyBuild = props => {
    

return (
    <div className="container">
      {<Image />}
      {<Text/> }
    </div>
)

}

export default BodyBuild