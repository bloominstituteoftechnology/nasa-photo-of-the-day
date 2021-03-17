import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";


export default function Footer(props) {
    const { data } = props
  
    return(
        <div className='container'>
          <footer>
              <p>Copyright: {data.copyright}</p>
          </footer>
        </div>
    )

}