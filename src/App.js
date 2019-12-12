import React, {useState} from "react";
import "./App.css";
import Axios from "axios";
import { HeaderComponent } from "./Components/HeaderComponent";
import { ImageComponent } from "./Components/ImageComponent";

function App() {

const [lat, setLat] = useState(0);
const [lon, setLon] = useState(0);

handleLatChange = handleLatChange.bind(this);
handleLonChange = handleLonChange.bind(this);

function handleLatChange (event) {
setLat(event.target.value);
}

function handleLonChange (event) {
  setLon(event.target.value);
}

  return (
    <div className="App">
      <HeaderComponent />
      <div className="input">
            <form>
                <label>
                    Latitude:
                    <input type="text" value={lat} onChange={handleLatChange} />
                </label>
                <label>
                    Longitude:
                    <input type="text" value={lon} onChange={handleLonChange} />
                </label>
            </form>
        </div>
      <ImageComponent latProp={lat} lonProp={lon}/>
    </div>
  );
}

export default App;

