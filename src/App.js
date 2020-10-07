import React from "react";
import "./App.css";
import picList from './components/picList'


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <picList />
    </div>
  );
}

export default App;
