
import React, {useEffect, useState} from 'react'
import Posts from './components/Posts.js'
// import Neo from './components/Neo.js'
import axios from 'axios'

import './App.css'
// {import '.Neo.css';}


function App() {
    const [data, setData] = useState([])
    const fetch = () => {
    //{ axios.all[}
    axios.get('https://api.nasa.gov/planetary/apod?api_key=HL7Cmszg6ukeCduFdzUnboaD2ummKzuYzfYIyQRL')
      // {axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
      // ]}
      .then(response => {
        setData(response.data)
      })
      .catch (error => {console.log("There was an error, please try your request at a later time")}
    )
  }
useEffect(fetch, [])
console.log(data)

  return (
//     <div>
//       <Form>
//         <Form.Group widths='equal'>
//           <Form.Input fluid label='First name' placeholder='First name' />
//           <Form.Input fluid label='Last name' placeholder='Last name' />
//           <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
//         </Form.Group>
//         <Form.Group inline>
//           <label>Size</label>
//           <Form.Radio
//             label='Small'
//             value='sm'
//             checked={value === 'sm'}
//             onChange={this.handleChange}
//           />
//           <Form.Radio
//             label='Medium'
//             value='md'
//             checked={value === 'md'}
//             onChange={this.handleChange}
//           />
//           <Form.Radio
//             label='Large'
//             value='lg'
//             checked={value === 'lg'}
//             onChange={this.handleChange}
//           />
//         </Form.Group>
//         <Form.TextArea label='About' placeholder='Tell us more about you...' />
//         <Form.Checkbox label='I agree to the Terms and Conditions' />
//         <Form.Button>Submit</Form.Button>
//       </Form>
//     )
//   }

// export default FormExampleSubcomponentControl

//     </div>


    <div className="App">
      <Posts date={data.date} nasaVid = {data.url} title = {data.title} paragraph = {data.explanation}  />
      {/* <Neo /> */}
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

