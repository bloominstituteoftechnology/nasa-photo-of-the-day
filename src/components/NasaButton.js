import React, {useState} from 'react'
import NasaFun from './NasaFun'

function NasaButton(props){
    console.log('Button props: ', props)

    const [toggle, setToggle] = useState(false);

    const handleClick = event => {
        event.preventDefault();
        setToggle(!toggle)
    }
    




    return(
        <div>
            <button className='show-hide' onClick={handleClick} >
                Show / Hide
            </button>

            {toggle === true ? <NasaFun version = {props.version}  /> : null }
        </div>

    )
}

export default NasaButton