import React from "react";
import "./App.css";
import NasaPicList from "./NasaPicList";
import { Alert, Toast, ToastBody, ToastHeader } from 'reactstrap';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <Alert color="primary">
        This is the NASA image of the day!
      </Alert>
      <br />
      <NasaPicList />
      <br />
      <Alert color="dark">
        Check back tomorrow for a new image of the day!
      </Alert>
    </div>
  );
}

export default App;