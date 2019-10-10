import React,{useState} from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import CardContainer from "./components/mainContent/CardContainer"
import Footer from "./components/Footer/Footer"
import DateBtn from "./components/mainContent/DateBtn"
import {AppContainer} from "./components/StyledElements"

function App() {
  let [datePicker, setDatePicker] = useState("");
  // setDatePicker(document.querySelector("#datee").value)
  function todayDate(){
    var dateObj = document.querySelector("#datee").value;
    setDatePicker(dateObj)
    // var month = dateObj.getUTCMonth() + 1; //months from 1-12
    // var day = dateObj.getUTCDate();
    // var year = dateObj.getUTCFullYear();
    // setDatePicker(year + "-" + month + "-" + day);
  }

  return (
    <AppContainer className="App">
      <Logo />
      <DateBtn datePicker={datePicker} setDatePicker={setDatePicker} todayDate={todayDate} />
      <CardContainer datePicker={datePicker} />
      <Footer />
    </AppContainer>
  );
}

export default App;
