import React from 'react'
import './Posts.css'

export default function Posts(props) {

    return (
        <div className='Posting'>
            <h1> {props.title} </h1>
            <h5>{props.date}</h5>
          <img className= "picture" title='Nasa Video' src = {props.nasaVid} alt= "Red Moon" /> 
            <p> {props.paragraph} </p>
        </div>
    )
}

// import React from 'react'
// import './Posts.css'

// export default function Posts(props){
    
//     return (
//         <div className= "Posting">
//            <h1> {props.title} </h1>
//            <iframe title="Nasa Video" src = {props.nasaVid} > from body </iframe>
//         </div>
//     )
// }



