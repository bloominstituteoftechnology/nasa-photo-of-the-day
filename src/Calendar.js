import React from "react";

 function Calendar(props) {
     const { dateSelect } = props;

     return (
         <div className='calendarcontainer'>
             <input id='calendar' type='date' onChange={ (e) => {
                 e.persist();
                 dateSelect(e.target.value);
             } } />
         </div>
     )
 }

 export default Calendar;