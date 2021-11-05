import React, {useEffect, useState} from "react";
import "./App.css";
import Style from "style-components";
import "./Header.js";

function App() {
  const [NPFTD, setNPFTD] = useState(null)

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=QJvQ8epqTuHyftbwtNI2zWGIYkhTewyNThhIADJ5`)
    .then(resp => {
      setNPFTD(resp.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <p>
        NASA - Photo of the day <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {<Header NPFTD={NPFTD}/>}
    </div>
  );
}

export default App;
