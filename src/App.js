import React,{useState} from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import CardContainer from "./components/mainContent/CardContainer"
import Footer from "./components/Footer/Footer"
import DateBtn from "./components/mainContent/DateBtn"

function App() {
  let [datePicker, setDatePicker] = useState("")
  // setDatePicker(document.querySelector("#datee").value)
  function todayDate(){
    var dateObj = document.querySelector("#datee").value;
    console.log(dateObj)
    setDatePicker(dateObj)
    // var month = dateObj.getUTCMonth() + 1; //months from 1-12
    // var day = dateObj.getUTCDate();
    // var year = dateObj.getUTCFullYear();
    // setDatePicker(year + "-" + month + "-" + day);
  }

  return (
    <div className="App">
      <Logo />
      <DateBtn datePicker={datePicker} setDatePicker={setDatePicker} todayDate={todayDate} />
      <CardContainer datePicker={datePicker} />
      <Footer />
    </div>
  );
}

export default App;
