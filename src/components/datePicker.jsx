import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Datepicker(props) {
        let {datef} = props
    const [date, setDate] = useState({startDate: new Date()})
    let handleChange = (date) => {
        setDate({startDate: date})
        datef(date)

    }


    return (
        <div>
            <DatePicker
        selected={date.startDate}
        onChange={handleChange}
      />
        </div>
    )
}

export default Datepicker
