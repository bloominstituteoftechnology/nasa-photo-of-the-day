import { render } from '@testing-library/react'
import React from 'react'




function Photo (data) {
    const[nasa, SetNasa] = useState('')
    useEffect(() => {
    axios.get('https://api.nasa.gov/#apod/${data}')
    .then(res => SetNasa(res.data)) 
    .catch(err =>console.log(err))
    SetNasa(data)
    
    }, [])




    return (
       <div className='Photo'>
       <h1>Beautiful space</h1>
        <img src ={nasa} alt= 'space pic'/>

       </div>
    )
}

export default Photo 