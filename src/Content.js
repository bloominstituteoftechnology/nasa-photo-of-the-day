import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './index'

export default function Content(props) {
const {date, apod, close} = props
const [contents, setContents] = useState(null)

useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${apod.date}`)
    .then(({data}) => setContents(data))
    .catch(err => console.log(err))
}, [apod.date])

return (
    <div className='container'>
        {
            contents &&
            <>
        <h2>{date}</h2>
        <img src={`${apod.url}`} alt='Newly Discovered Space Anomaly'/>
        <h2>{apod.title}</h2>
        <h2>Copyright: {apod.copyright}</h2>
        <p>Description: {apod.explanation}</p>

        </>
}
<button onClick={close}>Return to Base</button>
    </div>
)


}