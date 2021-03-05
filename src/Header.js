import React, { useState, useEffect} from 'react';
import axios from 'axios';
  
export default function Header(props){
    console.log(props)
 return (
     <>{props.title} </>
 )

}
