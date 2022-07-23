import react, {useState, useEffect} from 'react'

const Dropdown = props =>{

    const [toggleCSS, setToggleCSS] = useState(false)

    
    // useEffect(()=>{
    //     setTimeout(() => setToggleCSS(false), 7000)
    // },[toggleCSS])


return (
    <>
    <div>
    {toggleCSS &&   
    <div className='dateContainer'>
        <div className='textAboveDateInput'>View a different<br></br>Photo<br></br>of the Day!</div>
        <input className = 'dateInput' type='date' onChange={(e =>{
            props.setDate(e.target.value)
        })}></input>
        </div>
        }  
         <button className = 'dateButton' onClick={() => setToggleCSS(!toggleCSS) }>
            <i className="fa-solid fa-bars"></i></button>
        </div>
        </>

)
    }

    export default Dropdown