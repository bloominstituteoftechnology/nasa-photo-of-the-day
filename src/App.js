import React, {useState, useEffect} from "react";
import axios from "axios";
/* import Calendar from "react-calendar" */
import Planet from "./components/Planet.js"
/* import ModernDatepicker from 'react-modern-datepicker'; */
/* import Calendar from "./CalendarComponent.js"; */
import ReactCalendar from "react-calendar";
import "./App.css";

/* const axios = require('axios').default; */

function App() {

const [nasaState,setNasaState] = useState({});

useEffect(() =>{

    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
         .then((response)=>{
             console.log(response.data)
             setNasaState(response.data)
         })
         .catch(error => console.log(error))
},[])


    const Calendar = () => {
        const [date, setDate] = useState(new Date());

        const onChange = () => {
            setDate(date);
        }
    };

    return (
        <div className="App">
            <p>
                Read through the instructions in the README.md file to build your NASA
                app! Have fun 🚀!
            </p>
            <Planet
                headImage={nasaState.hdurl}
                title={nasaState.title}
                date={nasaState.date}
                description={nasaState.explanation}
                imgUrl={nasaState.url}
                copyright={nasaState.copyright}
                />
            <Calendar onChange={onChange} value={date} />
        </div>
  );
}

export default App;
