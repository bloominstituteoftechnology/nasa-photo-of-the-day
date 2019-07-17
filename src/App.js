import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>This is where the header goes</header>

      <div id='appBody'>

        <section className = 'nasaCard'>
          <div className = 'imageWrap'>
            <img></img>
          </div>
          <article>
            <h2 className = 'imageTitle'></h2>
            <p className = 'imageDescription'></p>
          </article>
        </section>

      </div>
    </div>
  );
}

export default App;
