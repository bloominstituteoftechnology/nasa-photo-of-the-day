import React from "react";
import Title from "./components/Title";
import "./App.css";

function App() {
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    fetch("https://lambda-github-api-server.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        setState(data);
      });
  });

  const { title, hdurl, copyright, date } = state;

  return (
    <div className="App">
      <Title date={date} />

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
