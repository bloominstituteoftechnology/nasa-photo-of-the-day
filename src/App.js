import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
// import component
// import component

const App = () => {

  // State slice hooks
  // const [data, setData] = useState()
  // const [] = useState()
  // const [] = useState()

  // 1st scaffolding example
  // useEffect(() => {
  //   const fetchData = () => {
  //     axios
  //       .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEYd")
  //       .then(res => setData(result.data))
  //       .catch((err) => {
  //         debugger
  //         })
  //   };

  //   fetchData();
  // }, []);
  
  // 2nd scaffolding example
  // axios
  //   .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //   .then((res) => {
  //      console.log(res.data???)
  //      setData(res.data???) 
  //   })
  //   .catch((err) => {
  //      debugger
  // })
  
  // };

function App() {
  return (
    <div className="App">
      <p>
        {/* add child components and props to inject in each appropriate child(ex = <Pictures picture={picture}/>) */}
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
};


export default App;
