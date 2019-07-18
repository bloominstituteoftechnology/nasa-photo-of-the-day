
import React, {useEffect, useState} from 'react'
import Posts from './components/Posts.js'
import axios from 'axios'
import './App.css';


function App() {
    const [data, setData] = useState([])

    const fetch = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=HL7Cmszg6ukeCduFdzUnboaD2ummKzuYzfYIyQRL')
      .then(response => {
        setData(response.data)
      })

      .catch (error => {console.log("There was an error, please try your request at a later time")}
    )
  }
useEffect(fetch, [])
  console.log(data)

  return (
    <div className="App">
      <Posts date={data.date} nasaVid = {data.url} title = {data.title} paragraph = {data.explanation}  />
    </div>
    )
} 

export default App;

// function App() {
//   const [data, setData] = useState([])

//   const fetch = () => {
//     axios.get('https://api.nasa.gov/planetary/apod?api_key=HL7Cmszg6ukeCduFdzUnboaD2ummKzuYzfYIyQRL')
//       .then(response => {
//         setData(response.data)
//       })
//       .catch(error => { console.log( "there was an error gathering your data")}
//     )
  
//   }

//     useEffect(fetch, [])

//     console.log(data)

//   return (
//     <div className="App">
//        <Posts nasaVid = {data.url} title = {data.title} paragraph = {data.explanation} />
       
//     </div>
//   )
// }

// export default App;



// function App() {
// const [data, setData] = useState([])
  
// const fetch = () => {
//   axios.get('https://api.nasa.gov/planetary/apod?api_key=NAf8daghyuqrFP75HDn3EzQnbyDVNAt5MxpZUxgp')
//   .then(response => {
//     setData(response.data)
//   })
//   .catch(error => {console.log ("error: page is not loading properly, please try again later")}
//   )
// }

// useEffect(fetch, [])

//   return (
//     <div className="App">
//      <Posts />
//     </div>
//   )
// }

// export default App;

