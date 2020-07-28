import React, { useState } from "react";

const NasaPhoto = () => {

const [photo, setPhoto] = useState([])

    useEffect(() => {
          axios.get("")
              .then(response => console.log(response))
              .catch(error => console.log(error)) 
      });

    return (
      <p>Just checking</p>
    );
  }
  
  export default NasaPhoto;