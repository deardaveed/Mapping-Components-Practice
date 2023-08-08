import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(entry) {
  return <Card emoji={entry.emoji} name={entry.name} meaning={entry.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createCard)};
    </div>
  );
}

export default App;
