import React from "react";
import "./App.css";
import MediaGrid from "./components/MediaGrid";

function App() {
  return (
    <div className="App">
      <h1>
        "Your Mind is like a parachute: If it isn't open, it doesn't work."
      </h1>
      <h3>Buzz Aldrin on Keeping an open mind</h3>

      <section>
        <MediaGrid />
      </section>
    </div>
  );
}

export default App;
