import React from "react";
import NASAContent from "./../src/components/NASAContent";
import "./App.css";
import DropDownNASA from "./Dropdown";


function App() {
  return (
    <div className="App">
      {/* <Alert color="primary">
        This is a primary alert — check it out!
      </Alert> */}
      {/* <Button>Testing reactstrap</Button> */}
      <NASAContent />
      <DropDownNASA />
    </div>
  );
}

export default App;


