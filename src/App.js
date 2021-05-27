import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import NasaPhoto from './components/NasaPhoto';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
     <div>
       <Route component={NasaPhoto} path='' />
     </div>
    </BrowserRouter>
  );
}

export default App;
