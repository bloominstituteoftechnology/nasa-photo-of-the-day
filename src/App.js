import React from "react";
import "./App.css";
import Body from "./components/body.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";

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
