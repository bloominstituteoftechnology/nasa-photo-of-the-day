import React, {useState, useRef} from 'react';
import moment from 'moment'

const Date = (props) => {

 const [date, setDate] = useState()

  function handleDate (e) {
    setDate(e.target.value)
    e.preventDefault()
    console.log(date)

  }

    
    return (
        <div>
            <form>
                <input onChange = {handleDate} type='text'  id='myData' placeholder='Date (YYYY/MM/DD)'/>
                <button >Submit</button>
                
           </form>
        </div>
    );
};

export default Date;