import React, {useState, useRef} from 'react';
import moment from 'moment'

const Date = (props) => {
     
    
    return (
        <div>
            <form  onSubmit= { (e) => props.handleSubmit(e)}>
                <input onChange = {(e) => props.handleDate(e)} type='text'  id='myData' placeholder='Date (YYYY-MM-DD)'/>
                <button>Submit</button>
                
           </form>
        </div>
    );
};

export default Date;