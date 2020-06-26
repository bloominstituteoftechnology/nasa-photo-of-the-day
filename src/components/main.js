
import React, {useState, useEffect} from 'react'
import { Jumbotron, Button } from 'reactstrap';
import axios from "axios";



function Main (){
const [Media, setMedia] = useState([]);

useEffect(() => {
  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=G19D8VqjXPaE3FJG0UBbfsIpUBnDg4NkvXpCw2fQ')
    .then(response => {
      console.log(response.data)
      setMedia(response.data)
    })
    .catch(err => {
      console.log('err')
    })
}, []);

return (
  
  <div className="App">
     <div>
      <Jumbotron className ="jumbo">
        <h1 className="display-3"> {Media.title} <span role="img" aria-label='go!'>🚀</span>!</h1>
        <p className="lead">{Media.date}</p>
        {/* <hr className="my-2" /> */}
         {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
       
      </Jumbotron>
    </div>
      {/* <div className="Header">
    <h1>
     {Media.title} <span role="img" aria-label='go!'>🚀</span>!
    </h1>
    <h3>{Media.date}</h3>
    </div> */}
  
    <div><img  className="pic" src={Media.hdurl}></img></div>
    <p className="lead">
          <Button color="primary">Learn More</Button>
        </p> 
   <div className="Expla"> <p className="lead"><span>Explanation: </span>{Media.explanation}</p> </div>
  </div>
);
}

export default Main;
