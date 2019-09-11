import React from "react";
import Title from "./components/Title";
import Figure from "./components/Figure";
import Details from "./components/Details";
import "./App.css";

function App() {
  const [state, setState] = React.useState({});

  const getData = () => {
    fetch("https://lambda-github-api-server.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        setState(data);
      });
  };

  React.useEffect(getData);

  const { title, hdurl, copyright, date, explanation } = state;

  return (
    <div className="App">
      <Title date={date} />
      <Figure copyright={copyright} title={title} imgUrl={hdurl} />
      <Details title={title} description={explanation} />

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="">
          🚀
        </span>
        !
      </p> */}
    </div>
  );
}

export default App;
