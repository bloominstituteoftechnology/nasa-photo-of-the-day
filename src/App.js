import React, {useState, useEffect} from "react";
import "./App.css";
import Card1 from './components/card'
import Datepicker from './components/datePicker'
import axios from "axios";

function App() {
  const [nasaCall, setNasaCall] = useState([])
  const [d, setnewD] = useState('2012-03-14')
  const [loading, setLoading] = useState(true)

let setD = (date) => {
  let month = date.toString().substring(4,7)
  let day = date.toString().substring(8,10)
  let year = date.toString().substring(11,15)
  let newMonth 
  if(month === "Jan"){
    newMonth = '01'
  }else if(month === "Feb"){
      newMonth = '02'
  }else if(month === "Mar"){
    newMonth = '03'
}else if(month === "Apr"){
  newMonth = '04'
}else if(month === "May"){
  newMonth = '05'
}else if(month === "Jun"){
  newMonth = '06'
}else if(month === "Jul"){
  newMonth = '07'
}else if(month === "Aug"){
  newMonth = '08'
}else if(month === "Sep"){
  newMonth = '09'
}else if(month === "Oct"){
  newMonth = '10'
}else if(month === "Nov"){
  newMonth = '11'
}else if(month === "Dec"){
  newMonth = '12'
}
  

  
  let formattedDate = newMonth+day+year 
  console.log(year+"-"+newMonth+"-"+day)
  setnewD(year+"-"+newMonth+"-"+day)

 
}


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=sHSkNdRp3rJDBkhVCFN6rImj5fDs1xYi7C3wedKI&date=${d}`)
      .then(res => {
        setNasaCall(res.data)
        setLoading(false)
        
      }) 
      .catch(err => {console.log(err)})
  }, [d])

let loadingCheck = ()  => {
  if(loading){
    return <h1>Loading....</h1>
  } else{
    return (
    <div>
     <h1>NASA Photo Of The Day</h1>
  
     <Card1 nasa={nasaCall}  />
     <h3>Pick a day to display a photo</h3>
     <Datepicker datef={setD} />
     </div>
    )
  }
}



  return (
    <div className="App">
     
    {loadingCheck()}


    </div>
  );
}

export default App;
