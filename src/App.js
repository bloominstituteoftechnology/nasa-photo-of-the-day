import React, {useState} from "react";
import "./App.css";
import CardBuilder from './Components/CardBuilder'
import Date from './Components/Date'
import Header from './Components/Header'

function App(props) {
  let today = new window.Date();
  let dd = String(today.getDate());
  let mm = String(today.getMonth() + 1);
  let yyyy = today.getFullYear();
  
  today = yyyy + '-' + mm + '-' + dd;
  
  const [date, setDate] = useState(today)
  const [date1, setDate1] = useState()
  


  function handleDate (e) {
     setDate1(e.target.value)

  }
  function handleSubmit (e) {
      e.preventDefault()
      setDate(date1)
      console.log(date)
    
  }

  return (
    <div className="App">
      <Header/>
      <Date handleDate = {handleDate} handleSubmit = {handleSubmit}  handleDate = {handleDate}/>
      <CardBuilder date = {date}/>
      
    </div>
  );
}

export default App;
