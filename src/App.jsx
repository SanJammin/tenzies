import { useState } from "react";
import "./App.css";
import Die from "./Die";

function App() {

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 100));
  }

  return (
    <>
      <main>
        <div className="dice-holder">
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
      </main>
    </>
  );
}

export default App;
