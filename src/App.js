import React from "react";
import "./App.css";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";

function App(props) {

  const {title, photo, desc} = props;

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <Body />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
