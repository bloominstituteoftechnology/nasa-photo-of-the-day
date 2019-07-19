
import React, {useEffect, useState} from 'react'
import Posts from './components/Posts.js'
import Neo from './components/Neo.js'
import Navbar from './components/navbar'
import axios from 'axios'

import './App.css'
import './components/navbar.css'
import './components/Neo.css';

// import React, { Component } from 'react'
// import { Form } from 'semantic-ui-react'

// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]

// class FormExampleSubcomponentControl extends Component {
//   state = {}

//   handleChange = (e, { value }) => this.setState({ value })




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

    const [data1, setData1] = useState([])
    const drag = () => {
    
    axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
   
    
      .then(response => {
        setData1(response.data)
      })
      .catch (error => {console.log("There was an error, please try your request at a later time")}
    )
  }
useEffect(drag, [])
console.log(data1)



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
      <Navbar />
      <Posts date={data.date} nasaVid = {data.url} title = {data.title} paragraph = {data.explanation}  />
      {/* {<Neo />} */}
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

