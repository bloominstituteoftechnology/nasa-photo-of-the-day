import React, {useState} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Calendar = (props) => {
    const [startDate, setStartDate] = useState(new Date())

    const onDateSelect = (date) => {
        setStartDate(date)
        const dateArr = date.toDateString().split(" ")
        props.setApodUrl(`${props.ApodUrl}` + `&date=` + `${dateArr[3]}` + `-` + `${(date.getMonth()+1)}` + `-` + `${dateArr[2]}`)
    }
    return (
      <DatePicker selected={startDate} onChange={onDateSelect} />
    )
  }

  export default Calendar