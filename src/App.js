import React from "react";
import "./App.css";
import MediaGrid from "./components/MediaGrid";
import { WrapperDiv, NewH1, NewH3, Button } from "./components/styleMe";
import {} from "semantic-ui-react";

function App() {
  return (
    <WrapperDiv>
      <NewH1>
        "Your Mind is like a parachute: If it isn't open, it doesn't work."
      </NewH1>
      <NewH3>Buzz Aldrin on Keeping an open mind</NewH3>
      <Button>Take me to The Moon</Button>

      <section>
        <MediaGrid />
      </section>
    </WrapperDiv>
  );
}

export default App;
