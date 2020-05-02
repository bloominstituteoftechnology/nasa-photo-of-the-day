import React, {useState, useEffect} from "react";
import axios from "axios";
/* import Calendar from "react-calendar" */
import Planet from "./components/Planet.js"
/* import ModernDatepicker from 'react-modern-datepicker'; */
/* import Calendar from "./CalendarComponent.js"; */
/* import ReactCalendar from "react-calendar"; */
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import "./App.css";

/* const axios = require('axios').default; */

function App() {

const [nasaState,setNasaState] = useState({});

const [selectedDate, setSelectedDate] = useState(null)

    /* const [modal,setModal] = useState(false); */



useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
         .then((response)=>{
             console.log(response.data)
             setNasaState(response.data)
         })
         .catch(error => console.log(error))
},[])

    /* let dateChanger = moment(selectedDate, 'ddd MM DD YYYY') */
    /* let datechanger = selectedDate.format('YYYY/MM/DD') */

    /* console.log(datechanger) */

    /* String input = selectedDate;
       SimpleDateFormat parser = new SimpleDateFormat("EEE MMM d HH:mm:ss zzz yyyy");
       Date date = parser.parse(input);
       SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
       String formattedDate = formatter.format(date);

    return (
        <div className="App">
            <p>
                Read through the instructions in the README.md file to build your NASA
                app! Have fun 🚀!
            </p>
            <span>Select a Date: </span>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='yyyy/MM/dd'
            />
           
            <div>
                {console.log(selectedDate)}
                {/* {console.log(nasaState)} */}
            </div>
            <Planet
                headImage={nasaState.hdurl}
                title={nasaState.title}
                date={nasaState.date}
                description={nasaState.explanation}
                imgUrl={nasaState.url}
                copyright={nasaState.copyright}
                />
            {/* <Calendar onChange={onChange} value={date} /> */}
            
        </div>
  );
}

export default App;
