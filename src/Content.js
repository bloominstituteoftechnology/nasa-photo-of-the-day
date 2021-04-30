import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './index'
import './App'
import {Card} from 'reactstrap'

export default function Content(props) {
const {date, close} = props
const [contents, setContents] = useState(null)

const textColor = {
    color: 'white',
    backgroundColor: 'purple'
}

const img = {
    maxWidth: 500,
    maxHeight: 700
}
useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(({data}) => setContents(data))
    .catch(err => console.log(err))
}, [date])

return (
    <div className='container'>
        <Card style={textColor}>
        {
            contents &&
            <>
        <h2>{date}</h2>
        <img src={contents.url} alt='Newly Discovered Space Anomaly' style={img}/>
        <h2>{contents.title}</h2>
        <h3>Copyright: {contents.copyright}</h3>
        <p>Description: {contents.explanation}</p>

        </>
}
<button onClick={close}>Return to Base</button>
</Card>
    </div>
)


}