import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <div className='header'>
        <header>
          im the header
          <nav>
            <a>link1</a>
            <a>link2</a>
            <a>link3</a>
          </nav>
        </header>
        <div className='body'>
          <body>
            im the body
          </body>
          <div className='footer'>
            <footer>
              im the footer
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
