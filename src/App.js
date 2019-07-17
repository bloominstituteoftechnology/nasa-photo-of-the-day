import React from "react";
import "./App.css";
import MediaGrid from "./components/MediaGrid";

function App() {
  return (
    <div className="App">
      <h1>NASA place holder!!</h1>

      <ul>
        <li>why do you want to go to the moon</li>
        <li>how could they fake a moon landing?</li>
      </ul>

      <section>
        <b>build a card list here!</b>
        <MediaGrid limit={10} />
      </section>
    </div>
  );
}

export default App;
