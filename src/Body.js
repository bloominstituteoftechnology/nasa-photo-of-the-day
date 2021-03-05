import React, { useEffect, useState} from 'react';
import axios from 'axios'



export default function Body(props){
    console.log(props)
    return (
        <div>
            {props.explanation}

        </div>
    )

    }
    