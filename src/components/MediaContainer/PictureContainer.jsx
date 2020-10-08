import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PictureContainer = (props) => { 
    
    return (
        <> <img src={props.photoObject}/> </>
    )
}

export default PictureContainer;