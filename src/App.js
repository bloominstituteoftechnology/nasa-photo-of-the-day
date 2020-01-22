import React from "react";
import "./App.css";
import DayPhotoContainer from './components/DayPhotoContainer';

function App() {
  return (
    <div className="App">
      {/* <div className='App-logo'> */}
        {/* <img className='logo' src={logo} alt='NASA logo' /> */}

        
      <h1>NASA Photo of the Day</h1>
    <DayPhotoContainer />
      
      
    </div>
    // </div>
  );
}

export default App;
