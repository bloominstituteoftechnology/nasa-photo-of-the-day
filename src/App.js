import React from "react";
import "./App.css";
import NasaPicList from "./NasaPicList";
import { Alert, AlertTitle }  from '@material-ui/lab';

function App() {
  return (
    <div className="App">
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is the NASA image of the day!
      </Alert>
      <br />
      <NasaPicList />
      <br />
      <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
        Check back tomorrow for a new image of the day!
      </Alert>
    </div>
  );
}

export default App;